import React from 'react';

export const QAOADiagram: React.FC = () => {
    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary text-center">
            <h3 className="font-semibold text-qc-accent text-base mb-4">QAOA for Max-Cut Problem</h3>
            <svg viewBox="0 0 420 180" className="w-full h-auto" aria-labelledby="qaoa-diagram-title" role="img">
                <title id="qaoa-diagram-title">Diagram of the QAOA solving a Max-Cut problem on a graph.</title>

                <defs>
                    <marker id="arrowhead-qaoa" markerWidth="5" markerHeight="3.5" refX="2.5" refY="1.75" orient="auto">
                        <polygon points="0 0, 5 1.75, 0 3.5" className="fill-current text-qc-text-secondary"/>
                    </marker>
                </defs>

                {/* Part 1: Max-Cut Problem */}
                <g>
                    <text x="80" y="20" className="font-semibold fill-current text-white" textAnchor="middle" fontSize="14">1. The Problem: Max-Cut</text>
                    <text x="80" y="35" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Partition nodes to maximize cut edges.</text>
                    
                    {/* Graph */}
                    <circle cx="50" cy="80" r="10" className="fill-blue-500 stroke-white" strokeWidth="1"/>
                    <text x="50" y="84" className="fill-white font-bold" textAnchor="middle" fontSize="10">A</text>
                    <circle cx="110" cy="80" r="10" className="fill-red-500 stroke-white" strokeWidth="1"/>
                     <text x="110" y="84" className="fill-white font-bold" textAnchor="middle" fontSize="10">B</text>
                    <circle cx="50" cy="120" r="10" className="fill-red-500 stroke-white" strokeWidth="1"/>
                     <text x="50" y="124" className="fill-white font-bold" textAnchor="middle" fontSize="10">C</text>
                    <circle cx="110" cy="120" r="10" className="fill-blue-500 stroke-white" strokeWidth="1"/>
                     <text x="110" y="124" className="fill-white font-bold" textAnchor="middle" fontSize="10">D</text>

                    {/* Edges */}
                    <line x1="60" y1="80" x2="100" y2="80" className="stroke-current text-qc-accent" strokeWidth="2"/>
                    <line x1="50" y1="90" x2="50" y2="110" className="stroke-current text-qc-accent" strokeWidth="2"/>
                    <line x1="60" y1="120" x2="100" y2="120" className="stroke-current text-white" strokeWidth="1"/>
                    <line x1="110" y1="90" x2="110" y2="110" className="stroke-current text-qc-accent" strokeWidth="2"/>
                    <line x1="58" y1="88" x2="102" y2="112" className="stroke-current text-qc-accent" strokeWidth="2"/>

                     <text x="80" y="160" className="fill-current text-qc-accent" textAnchor="middle" fontSize="12">Solution: 5 Cuts</text>
                </g>

                {/* Separator */}
                <line x1="180" y1="30" x2="180" y2="150" className="stroke-current text-qc-border" />

                {/* Part 2: QAOA Ansatz */}
                <g>
                    <text x="300" y="20" className="font-semibold fill-current text-white" textAnchor="middle" fontSize="14">2. The QAOA Circuit (Ansatz)</text>
                    <text x="300" y="35" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Classical optimizer tunes γ and β angles.</text>
                    
                    {/* Circuit Line */}
                    <line x1="200" y1="80" x2="400" y2="80" className="stroke-current text-qc-border"/>
                    <text x="190" y="84" className="fill-current" fontSize="12">|ψ⟩</text>

                    {/* Cost Unitary */}
                    <rect x="220" y="65" width="60" height="30" className="fill-purple-600/30 stroke-purple-400" strokeWidth="1.5"/>
                    <text x="250" y="84" className="fill-purple-300 font-bold" textAnchor="middle" fontSize="10">e⁻ⁱᵞᴴc</text>

                    {/* Mixer Unitary */}
                    <rect x="310" y="65" width="60" height="30" className="fill-teal-600/30 stroke-teal-400" strokeWidth="1.5"/>
                    <text x="340" y="84" className="fill-teal-300 font-bold" textAnchor="middle" fontSize="10">e⁻ⁱᵝᴴb</text>

                    <text x="300" y="120" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Repeated 'p' times</text>

                     <path d="M 285 90 Q 300 110, 315 90" stroke="currentColor" strokeWidth="1" fill="none" className="text-qc-text-secondary" markerEnd="url(#arrowhead-qaoa)"/>
                </g>
            </svg>
        </div>
    );
};
