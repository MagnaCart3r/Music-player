export interface Song {
  title: string;
  artist: string;
  duration: string;
  url: string;
  cover: string;
}

export const playlist: Song[] = [
  {
    title: "Midnight Jazz",
    artist: "Jazz Ensemble",
    duration: "4:35",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Ocean Waves",
    artist: "Nature Sounds",
    duration: "3:48",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Urban Dreams",
    artist: "The Collective",
    duration: "5:12",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
  }
];