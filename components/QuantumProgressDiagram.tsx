import React from 'react';

const companies = [
    { name: 'IBM', color: '#648FFF', data: [{ year: 2019, qubits: 53 }, { year: 2021, qubits: 127 }, { year: 2023, qubits: 1121 }] },
    { name: 'Google', color: '#FFB000', data: [{ year: 2019, qubits: 53 }, { year: 2023, qubits: 70 }] },
    { name: 'Quantinuum', color: '#DC267F', data: [{ year: 2020, qubits: 10 }, { year: 2024, qubits: 56 }] },
];

const MAX_QUBITS = 1200;
const X_START = 50;
const X_END = 400;
const Y_START = 140;
const Y_END = 30;

const yearToX = (year: number) => {
    const minYear = 2019;
    const maxYear = 2024;
    return X_START + ((year - minYear) / (maxYear - minYear)) * (X_END - X_START);
};

const qubitsToY = (qubits: number) => {
    return Y_START - (Math.log10(qubits+1) / Math.log10(MAX_QUBITS+1)) * (Y_START - Y_END);
};

export const QuantumProgressDiagram: React.FC = () => {
    return (
        <div className="bg-qc-surface border border-qc-border rounded-lg p-4 sm:p-6 mb-8 text-qc-text-primary">
            <h3 className="text-base font-semibold text-qc-accent text-center mb-4">Timeline of Qubit Count Progress (Illustrative)</h3>
            <svg viewBox="0 0 420 200" className="w-full h-auto" aria-labelledby="progress-diagram-title" role="img">
                <title id="progress-diagram-title">Chart showing the increase in qubit counts by major companies over time.</title>
                
                {/* Y-axis (Qubits) */}
                <line x1={X_START} y1={Y_START} x2={X_START} y2={Y_END - 10} className="stroke-current text-qc-border" />
                <text x={X_START - 10} y={Y_START} className="fill-current text-qc-text-secondary" textAnchor="end" fontSize="10">1</text>
                <text x={X_START - 10} y={qubitsToY(100)} className="fill-current text-qc-text-secondary" textAnchor="end" fontSize="10">100</text>
                <text x={X_START - 10} y={qubitsToY(1000)} className="fill-current text-qc-text-secondary" textAnchor="end" fontSize="10">1k</text>
                <text x={X_START - 25} y={(Y_START + Y_END) / 2} className="fill-current text-qc-text-secondary" fontSize="10" transform={`rotate(-90 ${X_START-25} ${(Y_START+Y_END)/2})`}>Qubits (log scale)</text>

                {/* X-axis (Year) */}
                <line x1={X_START} y1={Y_START} x2={X_END + 10} y2={Y_START} className="stroke-current text-qc-border" />
                {[2019, 2020, 2021, 2022, 2023, 2024].map(year => (
                    <text key={year} x={yearToX(year)} y={Y_START + 15} className="fill-current text-qc-text-secondary" textAnchor="middle" fontSize="10">{year}</text>
                ))}

                {/* Data Lines and Points */}
                {companies.map(company => (
                    <g key={company.name}>
                        {company.data.map((point, index) => {
                            if (index > 0) {
                                const prev = company.data[index - 1];
                                return (
                                    <line
                                        key={`${company.name}-${point.year}-line`}
                                        x1={yearToX(prev.year)}
                                        y1={qubitsToY(prev.qubits)}
                                        x2={yearToX(point.year)}
                                        y2={qubitsToY(point.qubits)}
                                        stroke={company.color}
                                        strokeWidth="2"
                                        strokeDasharray="2 2"
                                    />
                                );
                            }
                            return null;
                        })}
                         {company.data.map(point => (
                            <circle
                                key={`${company.name}-${point.year}-point`}
                                cx={yearToX(point.year)}
                                cy={qubitsToY(point.qubits)}
                                r="3"
                                fill={company.color}
                            />
                        ))}
                    </g>
                ))}

                {/* Legend */}
                <g transform="translate(50, 170)">
                    {companies.map((company, index) => (
                         <g key={company.name} transform={`translate(${index * 110}, 0)`}>
                            <rect x="0" y="0" width="10" height="10" fill={company.color}/>
                            <text x="15" y="9" className="fill-current text-qc-text-primary" fontSize="10">{company.name}</text>
                         </g>
                    ))}
                </g>
            </svg>
        </div>
    );
};
