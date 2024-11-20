import React from 'react';
import { Music2 } from 'lucide-react';
import { Song } from '../types/music';

interface PlaylistViewProps {
  playlist: Song[];
  currentSongIndex: number;
  onSongSelect: (index: number) => void;
}

export const PlaylistView: React.FC<PlaylistViewProps> = ({
  playlist,
  currentSongIndex,
  onSongSelect
}) => {
  return (
    <div className="mt-6 bg-white/5 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
        <Music2 size={20} />
        Up Next
      </h3>
      <div className="space-y-2">
        {playlist.map((song, index) => (
          <div 
            key={index}
            onClick={() => onSongSelect(index)}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors
              ${currentSongIndex === index ? 'bg-white/20' : 'hover:bg-white/10'}`}
          >
            <img 
              src={song.cover} 
              alt={song.title}
              className="w-10 h-10 rounded object-cover"
            />
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{song.title}</p>
              <p className="text-gray-400 text-xs">{song.artist}</p>
            </div>
            <span className="text-gray-400 text-xs">{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};