import { useState, useEffect, useCallback } from 'react';
import { PlaygroundOutput } from '../components/CodeBlock';

// Pyodide is loaded into the global scope by the script tag
declare global {
    interface Window { 
        loadPyodide: (config: { indexURL: string }) => Promise<any>; 
    }
}

const pythonSetupCode = `
import sys
import io
import base64
import json
import matplotlib.pyplot as plt

def run_user_code(user_code):
    old_stdout = sys.stdout
    sys.stdout = captured_output = io.StringIO()
    results = {'stdout': None, 'error': None, 'images': []}

    try:
        # Create a dictionary for the execution context
        exec_globals = {}
        exec(user_code, exec_globals)

        # After execution, capture any generated Matplotlib figures
        figures = [plt.figure(i) for i in plt.get_fignums()]
        images = []
        for fig in figures:
            buf = io.BytesIO()
            fig.savefig(buf, format='png', bbox_inches='tight')
            buf.seek(0)
            images.append(base64.b64encode(buf.read()).decode('utf-8'))
        
        plt.close('all') # Clear figures for the next run
        results['images'] = images

    except Exception as e:
        results['error'] = str(e)
    finally:
        sys.stdout = old_stdout

    results['stdout'] = captured_output.getvalue()
    return json.dumps(results)
`;

export const usePyodide = () => {
    const [pyodide, setPyodide] = useState<any | null>(null);
    const [isPyodideLoading, setIsPyodideLoading] = useState(true);

    useEffect(() => {
        const loadPyodideAndPackages = async () => {
            try {
                const pyodideInstance = await window.loadPyodide({
                    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
                });
                
                await pyodideInstance.loadPackage(['matplotlib', 'qiskit', 'qiskit-nature']);
                
                // Set up our Python environment with the wrapper function
                pyodideInstance.runPython(pythonSetupCode);

                setPyodide(pyodideInstance);
            } catch (error) {
                console.error("Failed to load Pyodide or packages:", error);
            } finally {
                setIsPyodideLoading(false);
            }
        };

        loadPyodideAndPackages();
    }, []);

    const runPython = useCallback(async (code: string): Promise<PlaygroundOutput> => {
        if (!pyodide) {
            return { stdout: null, error: "Pyodide is not initialized.", images: [] };
        }
        
        try {
            // Get the wrapper function from Python scope
            const runUserCode = pyodide.globals.get('run_user_code');
            // Call the wrapper with the user's code
            const jsonResult = runUserCode(code);
            // Parse the JSON string returned from Python
            const result: PlaygroundOutput = JSON.parse(jsonResult);
            return result;
        } catch (error) {
            console.error("Error executing Python code:", error);
            if (error instanceof Error) {
                 return { stdout: null, error: error.message, images: [] };
            }
            return { stdout: null, error: "An unknown error occurred during execution.", images: [] };
        }
    }, [pyodide]);

    return { isPyodideLoading, runPython };
};