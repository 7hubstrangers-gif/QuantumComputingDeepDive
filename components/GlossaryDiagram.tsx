import React from 'react';

export const GlossaryDiagram: React.FC = () => {
    const terms = [
        { name: 'Qubit', x: 100, y: 50 },
        { name: 'Gate', x: 210, y: 50 },
        { name: 'Entanglement', x: 320, y: 50 },
        { name: 'Superposition', x: 100, y: 130 },
        { name: 'Measurement', x: 210, y: 130 },
        { name: 'Coherence', x: 320, y: 130 },
    ];

    const connections = [
        [0, 1], [1, 2], [3, 4], [4, 5], [0, 3], [1, 4], [2, 5], [0, 4], [1, 5]
    ];

    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary">
            <h3 className="text-base font-semibold text-qc-accent text-center mb-4">Glossary of Interconnected Quantum Concepts</h3>
            <svg viewBox="0 0 420 180" className="w-full h-auto" aria-labelledby="glossary-diagram-title" role="img">
                <title id="glossary-diagram-title">Diagram showing key quantum terms as an interconnected network.</title>
                
                {/* Connection Lines */}
                <g>
                    {connections.map(([start, end], i) => (
                        <line
                            key={i}
                            x1={terms[start].x}
                            y1={terms[start].y}
                            x2={terms[end].x}
                            y2={terms[end].y}
                            className="stroke-current text-qc-border opacity-70"
                            strokeWidth="1"
                        />
                    ))}
                </g>

                {/* Term Nodes */}
                <g>
                    {terms.map(term => (
                        <g key={term.name} transform={`translate(${term.x}, ${term.y})`}>
                            <circle r="12" className="fill-current text-qc-accent" />
                            <text
                                textAnchor="middle"
                                y={30}
                                className="fill-current text-qc-text-primary font-semibold"
                                fontSize="12"
                            >
                                {term.name}
                            </text>
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
};
