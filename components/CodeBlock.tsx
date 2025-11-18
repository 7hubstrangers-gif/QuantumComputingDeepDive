import React, { useState, useEffect } from 'react';
import { Loader } from './Loader';

export interface PlaygroundOutput {
  stdout: string | null;
  error: string | null;
  images: string[];
}

interface InteractiveCodeBlockProps {
  initialCode: string;
  runPython: (code: string) => Promise<PlaygroundOutput>;
  isPyodideLoading: boolean;
}

const CopyIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
);

const CheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const PlayIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    </svg>
);


export const InteractiveCodeBlock: React.FC<InteractiveCodeBlockProps> = ({ initialCode, runPython, isPyodideLoading }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<PlaygroundOutput | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    setCode(initialCode);
    setOutput(null);
  }, [initialCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleRunCode = async () => {
    setIsExecuting(true);
    setOutput(null);
    const result = await runPython(code);
    setOutput(result);
    setIsExecuting(false);
  };

  return (
    <div className="my-6">
      <div className="bg-qc-code-bg rounded-t-lg relative group border border-b-0 border-qc-border">
        <div className="p-2 flex justify-between items-center bg-qc-surface/30">
            <span className="text-xs font-semibold text-qc-text-secondary px-2">Qiskit Code Playground</span>
            <div>
                 <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md bg-qc-border/50 text-qc-text-secondary hover:bg-qc-border mr-2"
                    aria-label="Copy code"
                >
                    {isCopied ? <CheckIcon className="w-4 h-4 text-green-400" /> : <CopyIcon className="w-4 h-4" />}
                </button>
                 <button
                    onClick={handleRunCode}
                    disabled={isPyodideLoading || isExecuting}
                    className="px-3 py-1.5 rounded-md bg-green-600/80 text-white hover:bg-green-500 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center gap-2 text-sm font-semibold"
                    aria-label="Run code"
                >
                    <PlayIcon className="w-4 h-4"/>
                    Run Code
                </button>
            </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-64 p-4 bg-transparent text-sm text-qc-text-primary font-mono resize-y border-t border-qc-border focus:outline-none"
          spellCheck="false"
        />
      </div>
      {(isExecuting || output) && (
        <div className="bg-qc-surface rounded-b-lg p-4 border border-t-0 border-qc-border min-h-[100px]">
            <h4 className="text-sm font-semibold text-qc-text-secondary mb-2">Output</h4>
            {isExecuting && <Loader message="Executing..." />}
            {output?.error && <pre className="text-sm text-red-400 whitespace-pre-wrap font-mono">{output.error}</pre>}
            {output?.stdout && <pre className="text-sm text-qc-text-primary whitespace-pre-wrap font-mono">{output.stdout}</pre>}
            {output?.images && output.images.length > 0 && (
                <div className="mt-4 space-y-4">
                    {output.images.map((img, index) => (
                        <img 
                            key={index} 
                            src={`data:image/png;base64,${img}`} 
                            alt={`Generated plot ${index + 1}`} 
                            className="bg-white rounded-md"
                        />
                    ))}
                </div>
            )}
        </div>
      )}
    </div>
  );
};