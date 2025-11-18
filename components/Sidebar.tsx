
import React from 'react';
import { Section } from '../types';

interface SidebarProps {
  sections: Section[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  isLoading: boolean;
}

const QuantumOrbIcon: React.FC = () => (
    <svg viewBox="0 0 100 100" className="w-8 h-8 text-qc-accent" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4"/>
        <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
        <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(-45 50 50)" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
        <circle cx="50" cy="50" r="5" fill="currentColor"/>
    </svg>
);


export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, onSelectSection, isLoading }) => {
  return (
    <nav className="w-full md:w-80 bg-qc-surface border-b md:border-b-0 md:border-r border-qc-border p-4 sm:p-6 flex-shrink-0">
      <div className="flex items-center gap-3 mb-8">
        <QuantumOrbIcon />
        <h2 className="text-xl font-bold text-white">Quantum Deep Dive</h2>
      </div>
      <ul>
        {sections.map((section) => (
          <li key={section.id} className="mb-2">
            <button
              onClick={() => onSelectSection(section.id)}
              disabled={isLoading}
              className={`w-full text-left px-4 py-2.5 rounded-md text-sm transition-colors duration-200 ${
                activeSectionId === section.id
                  ? 'bg-qc-accent text-white font-semibold'
                  : 'text-qc-text-secondary hover:bg-qc-border hover:text-qc-text-primary'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
