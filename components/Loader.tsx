import React from 'react';

interface LoaderProps {
  message?: string;
  subMessage?: string;
}

export const Loader: React.FC<LoaderProps> = ({ 
  message = "Generating Quantum Insights...", 
  subMessage = "Please wait a moment while Gemini processes the request." 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center text-qc-text-secondary">
      <svg
        className="w-12 h-12 text-qc-accent animate-spin"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="8"
        />
        <path
          d="M50 5 C 25.147 5 5 25.147 5 50"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-4 text-lg font-medium">{message}</p>
      <p className="text-sm">{subMessage}</p>
    </div>
  );
};