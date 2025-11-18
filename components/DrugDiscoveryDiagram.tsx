import React from 'react';

export const DrugDiscoveryDiagram: React.FC = () => {
    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary">
            <h3 className="text-base font-semibold text-qc-accent text-center mb-4">Quantum Simulation for Drug Discovery</h3>
            <svg viewBox="0 0 420 200" className="w-full h-auto" aria-labelledby="drug-diagram-title" role="img">
                <title id="drug-diagram-title">Diagram explaining quantum simulation for drug discovery.</title>

                <defs>
                    <marker id="arrow-drug" markerWidth="5" markerHeight="3.5" refX="2.5" refY="1.75" orient="auto">
                        <polygon points="0 0, 5 1.75, 0 3.5" className="fill-current text-qc-accent"/>
                    </marker>
                </defs>

                {/* Step 1: Molecule Definition */}
                <g>
                    <text x="70" y="20" className="font-semibold fill-current text-white" textAnchor="middle" fontSize="14">1. Define Molecule</text>
                    {/* LiH Molecule */}
                    <circle cx="50" cy="80" r="15" className="fill-pink-400"/>
                    <text x="50" y="85" className="fill-black font-bold" textAnchor="middle" fontSize="12">Li</text>
                    <circle cx="100" cy="80" r="10" className="fill-gray-300"/>
                    <text x="100" y="84" className="fill-black font-bold" textAnchor="middle" fontSize="10">H</text>
                    <line x1="65" y1="80" x2="90" y2="80" className="stroke-current text-qc-text-primary" strokeWidth="2"/>
                    <text x="70" y="120" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">e.g., Lithium Hydride (LiH)</text>
                </g>
                
                <line x1="150" y1="80" x2="170" y2="80" className="stroke-current text-qc-accent" strokeWidth="1.5" markerEnd="url(#arrow-drug)"/>

                {/* Step 2: Quantum Simulation */}
                <g>
                    <text x="255" y="20" className="font-semibold fill-current text-white" textAnchor="middle" fontSize="14">2. Quantum Simulation</text>
                    <rect x="180" y="40" width="150" height="90" rx="8" className="fill-qc-code-bg/50 stroke-qc-border"/>
                    <text x="255" y="60" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Quantum Computer simulates</text>
                    <text x="255" y="72" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">the molecule's Hamiltonian</text>
                    <text x="255" y="100" className="fill-current text-qc-accent font-mono" textAnchor="middle" fontSize="12">Finds Ground State Energy</text>
                </g>

                <line x1="340" y1="80" x2="360" y2="80" className="stroke-current text-qc-accent" strokeWidth="1.5" markerEnd="url(#arrow-drug)"/>


                {/* Step 3: Energy Landscape */}
                <g>
                    <text x="255" y="150" className="font-semibold fill-current text-white" textAnchor="middle" fontSize="14">3. Analyze Results</text>
                    <path d="M 180 190 Q 255 160, 330 190" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-qc-accent-hover"/>
                    <circle cx="255" cy="170" r="4" className="fill-current text-green-400"/>
                    <line x1="255" y1="172" x2="255" y2="195" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-green-400"/>
                    <text x="255" y="195" className="fill-current text-green-400" textAnchor="middle" fontSize="9">Ground State (Most Stable)</text>
                </g>

                <text x="210" y="195" className="fill-current text-qc-text-secondary text-center" textAnchor="middle" fontSize="10">This predicts molecular properties, aiding in the design of new drugs.</text>

            </svg>
        </div>
    );
};
