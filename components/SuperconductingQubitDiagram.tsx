import React from 'react';

export const SuperconductingQubitDiagram: React.FC = () => {
    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary">
            <svg viewBox="0 0 420 180" className="w-full h-auto" aria-labelledby="sc-qubit-diagram-title" role="img">
                <title id="sc-qubit-diagram-title">Diagram of a Superconducting Qubit's Energy Levels</title>
                
                {/* Harmonic Oscillator */}
                <g transform="translate(0, 0)">
                    <text x="100" y="20" className="font-semibold fill-current text-qc-accent" textAnchor="middle" fontSize="14">Simple Harmonic Oscillator</text>
                    <path d="M 30 140 Q 100 30, 170 140" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-qc-border"/>
                    
                    <line x1="45" y1="115" x2="155" y2="115" className="stroke-current text-qc-text-secondary" strokeWidth="1"/>
                    <line x1="55" y1="90" x2="145" y2="90" className="stroke-current text-qc-text-secondary" strokeWidth="1"/>
                    <line x1="65" y1="65" x2="135" y2="65" className="stroke-current text-qc-text-secondary" strokeWidth="1"/>
                    
                    <text x="100" y="160" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Evenly spaced energy levels</text>
                    <text x="100" y="170" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">(Cannot isolate a single transition)</text>
                </g>

                {/* Anharmonic Oscillator (Qubit) */}
                <g transform="translate(220, 0)">
                    <text x="100" y="20" className="font-semibold fill-current text-qc-accent" textAnchor="middle" fontSize="14">Anharmonic Oscillator (Qubit)</text>
                    <path d="M 250-20 C 320,150 380,150 420,50" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-qc-accent-hover" transform="translate(-220, 0)"/>
                    
                    {/* |0> state */}
                    <line x1="45" y1="130" x2="155" y2="130" className="stroke-current text-green-400" strokeWidth="1.5"/>
                    <text x="35" y="134" className="fill-current font-bold" fontSize="12">|0⟩</text>

                    {/* |1> state */}
                    <line x1="55" y1="100" x2="145" y2="100" className="stroke-current text-blue-400" strokeWidth="1.5"/>
                     <text x="35" y="104" className="fill-current font-bold" fontSize="12">|1⟩</text>

                    {/* Other levels */}
                    <line x1="65" y1="75" x2="135" y2="75" className="stroke-current text-qc-text-secondary" strokeWidth="1"/>
                    <text x="35" y="79" className="fill-current" fontSize="12">|2⟩</text>

                    <text x="100" y="160" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Uneven spacing allows addressing</text>
                    <text x="100" y="170" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">the |0⟩ ↔ |1⟩ transition selectively</text>

                    {/* Arrow */}
                    <path d="M 100 128 L 100 102" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-white"/>
                    <text x="110" y="118" className="fill-current text-white" fontSize="10">Qubit</text>
                    <text x="118" y="124" className="fill-current text-white" fontSize="10">Transition</text>
                </g>
            </svg>
        </div>
    );
};
