import React from 'react';
import { InteractiveCodeBlock, PlaygroundOutput } from './CodeBlock';
import { ContentSegment } from '../types';
import { QuantumConceptsDiagram } from './QuantumConceptsDiagram';
import { QuantumGatesDiagram } from './QuantumGatesDiagram';
import { DeutschAlgorithmDiagram } from './DeutschAlgorithmDiagram';
import { SuperconductingQubitDiagram } from './SuperconductingQubitDiagram';
import { SiliconSpinQubitDiagram } from './SiliconSpinQubitDiagram';
import { PhotonicIonQubitDiagram } from './PhotonicIonQubitDiagram';
import { QuantumTeleportationDiagram } from './QuantumTeleportationDiagram';
import { QAOADiagram } from './QAOADiagram';
import { DrugDiscoveryDiagram } from './DrugDiscoveryDiagram';
import { GlossaryDiagram } from './GlossaryDiagram';


interface ContentDisplayProps {
  content: string;
  activeSectionId: string;
  runPython: (code: string) => Promise<PlaygroundOutput>;
  isPyodideLoading: boolean;
}

interface ParsedContent {
    before: ContentSegment[];
    code: string;
    after: ContentSegment[];
}

const parseContentWithPlayground = (text: string): ParsedContent => {
    if (!text) return { before: [], code: '', after: [] };
    const parts = text.split(/(\`\`\`python[\s\S]*?\`\`\`)/g);
    
    const firstCodeBlockIndex = parts.findIndex(part => part.startsWith('```python'));

    if (firstCodeBlockIndex === -1) {
        return { before: [{type: 'text', content: text}], code: '', after: [] };
    }

    const beforeParts = parts.slice(0, firstCodeBlockIndex);
    const codePart = parts[firstCodeBlockIndex].replace('```python\n', '').replace(/\n\`\`\`$/, '');
    const afterParts = parts.slice(firstCodeBlockIndex + 1);

    const parseTextSegments = (textParts: string[]): ContentSegment[] => {
        return textParts.filter(p => p.trim()).map(p => ({ type: 'text', content: p, diagram: 'not-applicable' }));
    };

    return {
        before: parseTextSegments(beforeParts),
        code: codePart,
        after: parseTextSegments(afterParts)
    };
};


const SectionDiagram: React.FC<{ activeSectionId: string }> = ({ activeSectionId }) => {
    switch (activeSectionId) {
        case 'overview':
            return <QuantumConceptsDiagram />;
        case 'gates':
            return <QuantumGatesDiagram />;
        case 'deutsch':
            return <DeutschAlgorithmDiagram />;
        case 'superconducting':
            return <SuperconductingQubitDiagram />;
        case 'silicon':
            return <SiliconSpinQubitDiagram />;
        case 'photonic_ion':
            return <PhotonicIonQubitDiagram />;
        case 'teleportation':
            return <QuantumTeleportationDiagram />;
        case 'qaoa':
            return <QAOADiagram />;
        case 'drug_discovery':
            return <DrugDiscoveryDiagram />;
        case 'glossary':
            return <GlossaryDiagram />;
        default:
            return null;
    }
};

const TextRenderer: React.FC<{ segments: ContentSegment[] }> = ({ segments }) => {
    return (
        <>
            {segments.map((segment, index) => (
                 <div key={index}>
                    {segment.content.split('\n').map((line, lineIndex) => {
                        if (line.startsWith('## ')) {
                            return <h2 key={lineIndex} className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-qc-border pb-2">{line.substring(3)}</h2>;
                        }
                        if (line.startsWith('* ')) {
                            return <li key={lineIndex} className="ml-5 text-qc-text-primary list-disc">{line.substring(2)}</li>;
                        }
                        if (line.trim() === '') {
                            return <br key={lineIndex} />;
                        }
                        return <p key={lineIndex} className="text-qc-text-primary leading-relaxed">{line}</p>;
                    })}
                </div>
            ))}
        </>
    );
};


export const ContentDisplay: React.FC<ContentDisplayProps> = ({ content, activeSectionId, runPython, isPyodideLoading }) => {
    const { before, code, after } = parseContentWithPlayground(content);

    return (
        <div className="prose prose-invert max-w-none text-qc-text-primary space-y-4">
            <SectionDiagram activeSectionId={activeSectionId} />
            <TextRenderer segments={before} />
            {code && (
                <InteractiveCodeBlock 
                    initialCode={code}
                    runPython={runPython}
                    isPyodideLoading={isPyodideLoading}
                />
            )}
            <TextRenderer segments={after} />
        </div>
    );
};