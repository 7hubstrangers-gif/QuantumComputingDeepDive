import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { Loader } from './components/Loader';
import { SECTIONS } from './constants';
import { Section } from './types';
import { generateContent } from './services/geminiService';
import { usePyodide } from './hooks/usePyodide';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(SECTIONS[0]);
  const [content, setContent] = useState<string>('');
  const [isFetchingContent, setIsFetchingContent] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { isPyodideLoading, runPython } = usePyodide();

  const fetchContent = useCallback(async (section: Section) => {
    setIsFetchingContent(true);
    setError(null);
    setContent('');
    const result = await generateContent(section.prompt);
    if (result.startsWith('Error from Gemini API:')) {
      setError(result);
    } else {
      setContent(result);
    }
    setIsFetchingContent(false);
  }, []);

  useEffect(() => {
    fetchContent(activeSection);
  }, [activeSection, fetchContent]);

  const handleSelectSection = (sectionId: string) => {
    const newSection = SECTIONS.find(s => s.id === sectionId);
    if (newSection) {
      setActiveSection(newSection);
    }
  };

  const isLoading = isFetchingContent || isPyodideLoading;

  return (
    <div className="min-h-screen font-sans text-qc-text-primary flex flex-col md:flex-row">
      <Sidebar 
        sections={SECTIONS}
        activeSectionId={activeSection.id}
        onSelectSection={handleSelectSection}
        isLoading={isLoading}
      />
      <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto h-screen">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 border-b-2 border-qc-border pb-4">
            {activeSection.title}
          </h1>
          <div className="mt-6">
            {isLoading && (
              <Loader 
                message={isPyodideLoading ? 'Initializing Playground...' : 'Generating Quantum Insights...'}
                subMessage={isPyodideLoading ? 'This may take a moment. Loading Python & Qiskit...' : 'Please wait while Gemini processes the request.'}
              />
            )}
            {error && <div className="text-red-400 bg-red-900/20 p-4 rounded-lg">{error}</div>}
            {!isLoading && !error && (
              <ContentDisplay 
                content={content} 
                activeSectionId={activeSection.id}
                runPython={runPython}
                isPyodideLoading={isPyodideLoading}
              />
            )}
          </div>
        </article>
      </main>
    </div>
  );
};

export default App;