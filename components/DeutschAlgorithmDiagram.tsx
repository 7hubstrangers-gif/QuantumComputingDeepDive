import React from 'react';

export const DeutschAlgorithmDiagram: React.FC = () => {
    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary">
            <svg viewBox="0 0 420 160" className="w-full h-auto" aria-labelledby="deutsch-diagram-title" role="img">
                <title id="deutsch-diagram-title">Quantum Circuit for the Deutsch Algorithm</title>

                <defs>
                    <marker id="arrowhead-deutsch" markerWidth="5" markerHeight="3.5" refX="5" refY="1.75" orient="auto">
                        <polygon points="0 0, 5 1.75, 0 3.5" className="fill-current text-qc-text-primary"/>
                    </marker>
                </defs>

                {/* Title */}
                <text x="210" y="20" className="font-semibold fill-current text-qc-accent" textAnchor="middle" fontSize="14">Deutsch Algorithm Circuit</text>

                {/* Qubit 0 line */}
                <g>
                    <text x="15" y="64" className="fill-current" fontSize="12">|0⟩</text>
                    <line x1="30" y1="60" x2="370" y2="60" className="stroke-current text-qc-border"/>
                    <rect x="50" y="45" width="30" height="30" className="stroke-current text-qc-accent-hover fill-qc-surface" strokeWidth="1.5"/>
                    <text x="65" y="64" className="fill-current font-bold" textAnchor="middle" fontSize="12">H</text>
                </g>

                {/* Qubit 1 line */}
                <g>
                    <text x="15" y="114" className="fill-current" fontSize="12">|1⟩</text>
                    <line x1="30" y1="110" x2="370" y2="110" className="stroke-current text-qc-border"/>
                    <rect x="50" y="95" width="30" height="30" className="stroke-current text-qc-accent-hover fill-qc-surface" strokeWidth="1.5"/>
                    <text x="65" y="114" className="fill-current font-bold" textAnchor="middle" fontSize="12">H</text>
                </g>
                
                {/* Oracle Uf */}
                <g>
                    <rect x="150" y="40" width="50" height="90" className="stroke-current text-qc-accent fill-qc-surface" strokeWidth="1.5"/>
                    <text x="175" y="89" className="fill-current font-bold" textAnchor="middle" fontSize="14">U<tspan baselineShift="sub" fontSize="10">f</tspan></text>
                    <line x1="175" y1="75" x2="175" y2="95" className="stroke-current text-qc-accent"/>
                    <circle cx="175" cy="110" r="4" className="fill-current text-qc-accent"/>
                    <line x1="175" y1="60" x2="175" y2="75" className="stroke-current text-qc-accent"/>
                </g>

                 {/* Final Hadamard */}
                 <g>
                    <rect x="250" y="45" width="30" height="30" className="stroke-current text-qc-accent-hover fill-qc-surface" strokeWidth="1.5"/>
                    <text x="265" y="64" className="fill-current font-bold" textAnchor="middle" fontSize="12">H</text>
                </g>

                {/* Measurement */}
                <g>
                    <rect x="320" y="45" width="30" height="30" className="stroke-current text-qc-text-secondary fill-qc-surface" strokeWidth="1.5"/>
                    <path d="M 327 65 A 8 8 0 0 1 343 65" fill="none" className="stroke-current text-qc-text-secondary" strokeWidth="1"/>
                    <line x1="335" y1="65" x2="340" y2="55" markerEnd="url(#arrowhead-deutsch)" className="stroke-current text-qc-text-secondary"/>
                </g>
                
                <text x="385" y="64" className="fill-current" fontSize="12">Measure</text>

                {/* Explanation */}
                <text x="210" y="150" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">If result is |0⟩, function is constant. If |1⟩, function is balanced.</text>
            </svg>
        </div>
    );
};
