import React from 'react';

export const QuantumConceptsDiagram: React.FC = () => {
    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary">
            <svg viewBox="0 0 420 200" className="w-full h-auto" aria-labelledby="diagram-title" role="img">
                <title id="diagram-title">Diagram explaining Qubits, Superposition, and Entanglement</title>
                
                <defs>
                    <marker id="arrowhead" markerWidth="5" markerHeight="3.5" refX="2.5" refY="1.75" orient="auto">
                        <polygon points="0 0, 5 1.75, 0 3.5" className="fill-current text-qc-accent"/>
                    </marker>
                </defs>

                {/* Part 1: Qubit & Superposition */}
                <g transform="translate(0, 0)">
                    <text x="105" y="20" className="font-semibold fill-current text-qc-accent" textAnchor="middle" fontSize="14">Qubit & Superposition</text>
                    
                    {/* Classical Bit */}
                    <g>
                        <text x="50" y="50" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="12">Classical Bit</text>
                        <rect x="30" y="60" width="40" height="20" rx="5" className="stroke-current text-qc-border fill-qc-code-bg"/>
                        <text x="40" y="74" className="fill-current font-bold" textAnchor="middle" fontSize="11">0</text>
                        <text x="50" y="74" className="fill-current" textAnchor="middle" fontSize="11">1</text>
                        <circle cx="40" cy="70" r="3" className="fill-current text-green-400"/>
                        <text x="50" y="100" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Fixed state (0 or 1)</text>
                    </g>

                    {/* Qubit */}
                    <g>
                        <text x="160" y="50" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="12">Qubit</text>
                        <circle cx="160" cy="110" r="40" className="stroke-current text-qc-border fill-none" strokeWidth="1"/>
                        <line x1="160" y1="70" x2="160" y2="150" className="stroke-current text-qc-border" strokeWidth="0.5" strokeDasharray="2"/>
                        <text x="160" y="65" className="fill-current" textAnchor="middle" fontSize="11">|0⟩</text>
                        <text x="160" y="162" className="fill-current" textAnchor="middle" fontSize="11">|1⟩</text>
                        
                        <line x1="160" y1="110" x2="188" y2="82" className="stroke-current text-qc-accent" strokeWidth="1.5" markerEnd="url(#arrowhead)"/>
                        <text x="160" y="180" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Can exist in a combination</text>
                        <text x="160" y="190" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">of states: α|0⟩ + β|1⟩</text>
                    </g>
                </g>

                {/* Vertical Separator */}
                <line x1="220" y1="30" x2="220" y2="170" className="stroke-current text-qc-border" />

                {/* Part 2: Entanglement */}
                <g transform="translate(230, 0)">
                    <text x="90" y="20" className="font-semibold fill-current text-qc-accent" textAnchor="middle" fontSize="14">Entanglement</text>
                    
                    {/* Qubit 1 */}
                    <circle cx="50" cy="100" r="30" className="stroke-current text-qc-border fill-none" strokeWidth="1"/>
                    <line x1="50" y1="100" x2="50" y2="70" className="stroke-current text-qc-accent" strokeWidth="1.5" markerEnd="url(#arrowhead)"/>
                    <text x="50" y="60" className="fill-current" textAnchor="middle" fontSize="10">Measured as |0⟩</text>

                    {/* Qubit 2 */}
                    <circle cx="130" cy="100" r="30" className="stroke-current text-qc-border fill-none" strokeWidth="1"/>
                    <line x1="130" y1="100" x2="130" y2="130" className="stroke-current text-qc-accent" strokeWidth="1.5" markerEnd="url(#arrowhead)"/>
                    <text x="130" y="145" className="fill-current" textAnchor="middle" fontSize="10">Instantly becomes |1⟩</text>

                    {/* Connecting Wave */}
                    <path d="M 80 100 Q 90 80, 100 100 T 120 100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" className="text-qc-accent-hover"/>
                    
                    <text x="90" y="180" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Linked particles. One's state</text>
                    <text x="90" y="190" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">instantly determines the other's.</text>
                </g>
            </svg>
        </div>
    );
};
