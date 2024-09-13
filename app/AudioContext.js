"use client";
// app/AudioContext.js
import { createContext, useContext, useState, useRef, useEffect } from "react";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, audioRef }}>
      {children}
      <audio ref={audioRef} src="/audio/bgAudio1.mp3" />
    </AudioContext.Provider>
  );
};
