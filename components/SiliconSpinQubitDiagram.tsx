import React from 'react';

export const SiliconSpinQubitDiagram: React.FC = () => {
    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary">
            <svg viewBox="0 0 420 180" className="w-full h-auto" aria-labelledby="si-qubit-diagram-title" role="img">
                <title id="si-qubit-diagram-title">Diagram of a Silicon Spin Qubit</title>
                
                <defs>
                    <pattern id="silicon-lattice" patternUnits="userSpaceOnUse" width="20" height="20" >
                        <circle cx="10" cy="10" r="1.5" className="fill-current text-qc-border"/>
                    </pattern>
                </defs>

                {/* Title */}
                <text x="210" y="20" className="font-semibold fill-current text-qc-accent" textAnchor="middle" fontSize="14">Silicon Spin Qubit</text>

                {/* Silicon Lattice */}
                <rect x="0" y="30" width="420" height="150" fill="url(#silicon-lattice)" />
                <rect x="0" y="30" width="420" height="150" className="fill-transparent stroke-current text-qc-border" />
                <text x="210" y="170" className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">Silicon Crystal Lattice</text>

                {/* Control Gate */}
                <rect x="170" y="40" width="80" height="20" rx="5" className="fill-current text-qc-accent-hover"/>
                <text x="210" y="54" className="fill-current text-white font-semibold" textAnchor="middle" fontSize="10">Control Gate</text>

                {/* Electric Field */}
                <path d="M 180 60 Q 210 80, 240 60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" className="text-qc-accent"/>
                 <path d="M 175 60 Q 210 85, 245 60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" className="text-qc-accent opacity-70"/>
                 <text x="210" y="80" className="fill-current text-qc-accent" textAnchor="middle" fontSize="9">Electric Field</text>

                {/* Trapped Electron */}
                <circle cx="210" cy="110" r="10" className="fill-current text-qc-accent"/>
                <text x="210" y="140" className="fill-current text-qc-text-primary font-semibold" textAnchor="middle" fontSize="12">Trapped Electron</text>
                
                {/* Spin Arrow */}
                <g>
                    <line x1="210" y1="102" x2="210" y2="118" stroke="white" strokeWidth="2" >
                        <animateTransform attributeName="transform" type="rotate" from="0 210 110" to="360 210 110" dur="2s" repeatCount="indefinite" />
                    </line>
                    <polygon points="207 102, 213 102, 210 96" fill="white">
                        <animateTransform attributeName="transform" type="rotate" from="0 210 110" to="360 210 110" dur="2s" repeatCount="indefinite" />
                    </polygon>
                    <text x="255" y="114" className="fill-current font-mono" fontSize="10">Spin = |↑⟩ or |↓⟩</text>
                </g>
            </svg>
        </div>
    );
};
