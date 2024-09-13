"use client";
import Landing from "../components/Landing";
import Projects from "@/components/Projects";
import Intro from "@/components/Intro";
import { useEffect, useState, useRef } from "react";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useAudio } from "@/app/AudioContext";
import Description from "@/components/Description";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInteractionDetected, setIsInteractionDetected] = useState(false);
  const { audioRef } = useAudio();

  useEffect(() => {
    const handleInteraction = () => {
      if (!isInteractionDetected) {
        setIsInteractionDetected(true);
        setIsLoading(false);
        if (audioRef.current) {
          audioRef.current.volume = 0.1; // Set volume to a quiet level
          //audioRef.current.play(); // currently not playing
        }
      }
    };

    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [isInteractionDetected, audioRef]);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Landing />
          <Intro />
          <Description />
          <Projects />
        </>
      )}
    </main>
  );
}
