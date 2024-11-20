import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Repeat, Shuffle } from 'lucide-react';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <button className="text-gray-400 hover:text-white transition-colors">
        <Shuffle size={20} />
      </button>
      
      <div className="flex items-center gap-4">
        <button 
          className="text-gray-400 hover:text-white transition-colors"
          onClick={onPrevious}>
          <SkipBack size={24} />
        </button>
        
        <button 
          className="bg-white rounded-full p-3 hover:bg-gray-200 transition-colors"
          onClick={onPlayPause}>
          {isPlaying ? 
            <Pause size={24} className="text-purple-900" /> : 
            <Play size={24} className="text-purple-900" />
          }
        </button>
        
        <button 
          className="text-gray-400 hover:text-white transition-colors"
          onClick={onNext}>
          <SkipForward size={24} />
        </button>
      </div>

      <button className="text-gray-400 hover:text-white transition-colors">
        <Repeat size={20} />
      </button>
    </div>
  );
};