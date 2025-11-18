import React from 'react';

export const PhotonicIonQubitDiagram: React.FC = () => {
    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary grid md:grid-cols-2 gap-8">
            {/* Trapped Ion Qubit */}
            <div className="text-center">
                <h3 className="font-semibold text-qc-accent text-base mb-4">Trapped Ion Qubit</h3>
                <svg viewBox="0 0 200 150" className="w-full h-auto" aria-labelledby="ion-diagram-title" role="img">
                    <title id="ion-diagram-title">Diagram of a Trapped Ion Qubit</title>
                    {/* Trap Electrodes */}
                    <path d="M 50 20 C 80 40, 120 40, 150 20" stroke="currentColor" strokeWidth="2" fill="none" className="text-qc-border"/>
                    <path d="M 50 130 C 80 110, 120 110, 150 130" stroke="currentColor" strokeWidth="2" fill="none" className="text-qc-border"/>
                    <text x="100" y="10" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Electromagnetic Trap</text>

                    {/* Trapped Ion */}
                    <circle cx="100" cy="75" r="8" className="fill-current text-qc-accent">
                        <animate attributeName="cy" from="74" to="76" dur="1s" repeatCount="indefinite" yoyo="true"/>
                    </circle>
                    <text x="100" y="95" className="fill-current font-semibold" textAnchor="middle" fontSize="12">Ion</text>
                    
                    {/* Laser Control */}
                    <line x1="20" y1="120" x2="80" y2="85" className="stroke-current text-red-400 opacity-70" strokeWidth="1.5" strokeDasharray="4 2"/>
                    <text x="30" y="135" className="fill-current text-red-400" textAnchor="middle" fontSize="10">Laser Control</text>
                </svg>
                 <p className="text-xs text-qc-text-secondary mt-2">Uses the electronic states of a charged atom (ion) as a qubit.</p>
            </div>

            {/* Photonic Qubit */}
            <div className="text-center">
                <h3 className="font-semibold text-qc-accent text-base mb-4">Photonic Qubit</h3>
                <svg viewBox="0 0 200 150" className="w-full h-auto" aria-labelledby="photon-diagram-title" role="img">
                    <title id="photon-diagram-title">Diagram of a Photonic Qubit</title>
                    {/* Photon */}
                    <circle cx="100" cy="75" r="8" className="fill-current text-qc-accent"/>
                    <text x="100" y="95" className="fill-current font-semibold" textAnchor="middle" fontSize="12">Photon</text>

                    {/* Polarization states */}
                    <g className="text-qc-text-secondary">
                        {/* Horizontal |0> */}
                        <line x1="50" y1="75" x2="150" y2="75" stroke="currentColor" strokeWidth="1.5"/>
                        <text x="165" y="79" className="fill-current" fontSize="10">|0⟩ (↔)</text>

                         {/* Vertical |1> */}
                        <line x1="100" y1="25" x2="100" y2="125" stroke="currentColor" strokeWidth="1.5"/>
                        <text x="100" y="15" className="fill-current" textAnchor="middle" fontSize="10">|1⟩ (↕)</text>
                    </g>
                    <p className="text-xs text-qc-text-secondary mt-2">Uses the polarization (orientation of oscillation) of a single photon as a qubit.</p>
                </svg>
                 <p className="text-xs text-qc-text-secondary mt-2">Uses the polarization (orientation of oscillation) of a single photon as a qubit.</p>
            </div>
        </div>
    );
};
