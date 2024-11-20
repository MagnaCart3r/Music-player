import React, { useState, useRef, useEffect } from 'react';
import { PlayerControls } from './PlayerControls';
import { VolumeControl } from './VolumeControl';
import { ProgressBar } from './ProgressBar';
import { PlaylistView } from './PlaylistView';
import { playlist } from '../types/music';
import { Headphones } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    // Reset audio and pause when song changes
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setProgress(0);
    }
  }, [currentSongIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle play interruption
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(isNaN(progress) ? 0 : progress);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newProgress = parseFloat(e.target.value);
      const time = (newProgress * audioRef.current.duration) / 100;
      audioRef.current.currentTime = time;
      setProgress(newProgress);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Headphones className="text-white" size={28} />
          <h1 className="text-2xl font-bold text-white tracking-wider">C-Savi</h1>
        </div>

        <div className="relative aspect-square mb-6 rounded-lg overflow-hidden shadow-xl">
          <img 
            src={currentSong.cover} 
            alt={currentSong.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">{currentSong.title}</h2>
          <p className="text-gray-300">{currentSong.artist}</p>
        </div>

        <ProgressBar progress={progress} onChange={handleProgressChange} />
        
        <PlayerControls 
          isPlaying={isPlaying}
          onPlayPause={togglePlay}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />

        <VolumeControl 
          volume={volume}
          isMuted={isMuted}
          onVolumeChange={handleVolumeChange}
          onMuteToggle={toggleMute}
        />

        <audio
          ref={audioRef}
          src={currentSong.url}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNext}
        />

        <PlaylistView 
          playlist={playlist}
          currentSongIndex={currentSongIndex}
          onSongSelect={setCurrentSongIndex}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;