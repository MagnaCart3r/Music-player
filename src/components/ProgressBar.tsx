import React from 'react';

interface ProgressBarProps {
  progress: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, onChange }) => {
  return (
    <div className="mb-6">
      <input
        type="range"
        min="0"
        max="100"
        value={progress || 0}
        onChange={onChange}
        className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};