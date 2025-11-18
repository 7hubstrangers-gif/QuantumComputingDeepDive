import React from 'react';

export const QuantumGatesDiagram: React.FC = () => {
    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary">
            <svg viewBox="0 0 420 180" className="w-full h-auto" aria-labelledby="gates-diagram-title" role="img">
                <title id="gates-diagram-title">Diagram of Quantum Gate Operations</title>
                
                <defs>
                    <marker id="arrowhead-gates" markerWidth="5" markerHeight="3.5" refX="2.5" refY="1.75" orient="auto">
                        <polygon points="0 0, 5 1.75, 0 3.5" className="fill-current text-qc-accent"/>
                    </marker>
                </defs>

                {/* Hadamard Gate */}
                <g transform="translate(0, 0)">
                    <text x="50" y="20" className="font-semibold fill-current text-qc-accent" textAnchor="middle" fontSize="14">Hadamard (H) Gate</text>
                    <text x="25" y="89" className="fill-current" textAnchor="middle" fontSize="12">|0⟩</text>
                    <line x1="40" y1="85" x2="110" y2="85" className="stroke-current text-qc-border"/>
                    <rect x="60" y="72.5" width="25" height="25" className="stroke-current text-qc-accent-hover fill-qc-surface" strokeWidth="1.5"/>
                    <text x="72.5" y="89" className="fill-current font-bold" textAnchor="middle" fontSize="12">H</text>
                    <line x1="110" y1="85" x2="125" y2="85" className="stroke-current text-qc-text-secondary" markerEnd="url(#arrowhead-gates)"/>
                    <text x="145" y="89" className="fill-current font-mono" textAnchor="middle" fontSize="12">|+⟩</text>
                    <text x="80" y="155" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Creates Superposition</text>
                </g>

                {/* Pauli-X Gate */}
                <g transform="translate(135, 0)">
                    <text x="80" y="20" className="font-semibold fill-current text-qc-accent" textAnchor="middle" fontSize="14">Pauli-X (NOT) Gate</text>
                     <text x="25" y="89" className="fill-current" textAnchor="middle" fontSize="12">|0⟩</text>
                    <line x1="40" y1="85" x2="110" y2="85" className="stroke-current text-qc-border"/>
                    <rect x="60" y="72.5" width="25" height="25" className="stroke-current text-qc-accent fill-qc-surface" strokeWidth="1.5"/>
                    <text x="72.5" y="89" className="fill-current font-bold" textAnchor="middle" fontSize="12">X</text>
                    <line x1="110" y1="85" x2="125" y2="85" className="stroke-current text-qc-text-secondary" markerEnd="url(#arrowhead-gates)"/>
                    <text x="145" y="89" className="fill-current font-mono" textAnchor="middle" fontSize="12">|1⟩</text>
                    <text x="80" y="155" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Flips State (NOT)</text>
                </g>

                {/* CNOT Gate */}
                 <g transform="translate(260, 0)">
                    <text x="80" y="20" className="font-semibold fill-current text-qc-accent" textAnchor="middle" fontSize="14">CNOT Gate</text>
                    {/* Control */}
                    <text x="25" y="69" className="fill-current" textAnchor="middle" fontSize="12">|1⟩</text>
                    <line x1="40" y1="65" x2="110" y2="65" className="stroke-current text-qc-border"/>
                    <circle cx="72.5" cy="65" r="4" className="fill-current text-qc-accent"/>
                    <line x1="110" y1="65" x2="125" y2="65" className="stroke-current text-qc-text-secondary" markerEnd="url(#arrowhead-gates)"/>
                    <text x="145" y="69" className="fill-current font-mono" textAnchor="middle" fontSize="12">|1⟩</text>
                    
                    {/* Target */}
                    <text x="25" y="109" className="fill-current" textAnchor="middle" fontSize="12">|0⟩</text>
                    <line x1="40" y1="105" x2="110" y2="105" className="stroke-current text-qc-border"/>
                    <circle cx="72.5" cy="105" r="8" stroke="currentColor" strokeWidth="1.5" className="text-qc-accent" fill="none"/>
                    <line x1="72.5" y1="97" x2="72.5" y2="113" className="stroke-current text-qc-accent"/>
                    <line x1="64.5" y1="105" x2="80.5" y2="105" className="stroke-current text-qc-accent"/>
                    <line x1="110" y1="105" x2="125" y2="105" className="stroke-current text-qc-text-secondary" markerEnd="url(#arrowhead-gates)"/>
                    <text x="145" y="109" className="fill-current font-mono text-red-400" textAnchor="middle" fontSize="12">|1⟩</text>

                    {/* Connection */}
                    <line x1="72.5" y1="69" x2="72.5" y2="97" className="stroke-current text-qc-accent"/>
                    
                    <text x="80" y="155" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Target Flips if Control is |1⟩</text>
                </g>
            </svg>
        </div>
    );
};
