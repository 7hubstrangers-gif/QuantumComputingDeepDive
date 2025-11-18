import React from 'react';

export const QuantumTeleportationDiagram: React.FC = () => {
    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary">
            <h3 className="text-base font-semibold text-qc-accent text-center mb-4">Quantum Teleportation Protocol</h3>
            <svg viewBox="0 0 420 220" className="w-full h-auto" aria-labelledby="teleport-diagram-title" role="img">
                <title id="teleport-diagram-title">Diagram of the Quantum Teleportation protocol.</title>

                <defs>
                    <marker id="arrow-sm" markerWidth="4" markerHeight="3" refX="2" refY="1.5" orient="auto">
                        <polygon points="0 0, 4 1.5, 0 3" className="fill-current text-qc-text-secondary"/>
                    </marker>
                </defs>

                {/* Alice's Side */}
                <g>
                    <rect x="10" y="10" width="190" height="150" rx="8" className="fill-qc-code-bg/50"/>
                    <text x="105" y="30" className="font-semibold fill-current text-white" textAnchor="middle" fontSize="14">Alice</text>
                    
                    {/* Qubit to Teleport */}
                    <text x="30" y="60" className="fill-current" fontSize="12">q0 |ψ⟩</text>
                    <line x1="70" y1="55" x2="160" y2="55" className="stroke-current text-qc-border"/>

                    {/* Alice's Bell pair qubit */}
                    <text x="30" y="110" className="fill-current" fontSize="12">q1</text>
                    <line x1="70" y1="105" x2="160" y2="105" className="stroke-current text-qc-border"/>

                    {/* CNOT Gate */}
                    <line x1="90" y1="55" x2="90" y2="105" className="stroke-current text-qc-accent"/>
                    <circle cx="90" cy="55" r="4" className="fill-current text-qc-accent"/>
                    <circle cx="90" cy="105" r="8" stroke="currentColor" strokeWidth="1.5" className="text-qc-accent" fill="none"/>
                    <line x1="90" y1="97" x2="90" y2="113" className="stroke-current text-qc-accent"/>
                    <line x1="82" y1="105" x2="98" y2="105" className="stroke-current text-qc-accent"/>

                    {/* Hadamard Gate */}
                    <rect x="115" y="42.5" width="25" height="25" className="stroke-current text-qc-accent-hover fill-qc-surface" strokeWidth="1.5"/>
                    <text x="127.5" y="59" className="fill-current font-bold" textAnchor="middle" fontSize="12">H</text>

                    {/* Measurement */}
                    <rect x="150" y="42.5" width="25" height="25" className="stroke-current text-qc-text-secondary fill-qc-surface" strokeWidth="1.5"/>
                    <rect x="150" y="92.5" width="25" height="25" className="stroke-current text-qc-text-secondary fill-qc-surface" strokeWidth="1.5"/>
                </g>

                {/* Bob's Side */}
                <g>
                    <rect x="220" y="10" width="190" height="150" rx="8" className="fill-qc-code-bg/50"/>
                    <text x="315" y="30" className="font-semibold fill-current text-white" textAnchor="middle" fontSize="14">Bob</text>

                    {/* Bob's Bell pair qubit */}
                    <text x="240" y="110" className="fill-current" fontSize="12">q2</text>
                    <line x1="260" y1="105" x2="390" y2="105" className="stroke-current text-qc-border"/>

                    {/* X Gate */}
                     <rect x="300" y="92.5" width="25" height="25" className="stroke-current text-blue-400 fill-qc-surface" strokeWidth="1.5"/>
                    <text x="312.5" y="109" className="fill-current font-bold" textAnchor="middle" fontSize="12">X</text>

                    {/* Z Gate */}
                    <rect x="340" y="92.5" width="25" height="25" className="stroke-current text-green-400 fill-qc-surface" strokeWidth="1.5"/>
                    <text x="352.5" y="109" className="fill-current font-bold" textAnchor="middle" fontSize="12">Z</text>
                    
                    <text x="395" y="110" className="fill-current" fontSize="12">|ψ⟩</text>
                </g>

                {/* Entanglement */}
                <path d="M 70 105 Q 155 140, 260 105" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" className="text-purple-400"/>
                <text x="165" y="150" className="fill-current text-purple-400" textAnchor="middle" fontSize="10">Initial Bell Pair Entanglement</text>


                {/* Classical Channel */}
                <g>
                    <path d="M 180 60 C 210 30, 280 80, 300 95" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-qc-text-secondary" markerEnd="url(#arrow-sm)"/>
                    <path d="M 180 110 C 210 140, 280 90, 340 95" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-qc-text-secondary" markerEnd="url(#arrow-sm)"/>
                    <text x="250" y="185" className="font-semibold fill-current text-qc-text-secondary" textAnchor="middle" fontSize="12">Classical Communication Channel</text>
                    <text x="250" y="200" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Alice sends 2 classical bits to Bob</text>
                </g>
            </svg>
        </div>
    );
};
