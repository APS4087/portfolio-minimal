"use client";
import Landing from "../components/Landing";
import Projects from "@/components/Projects";
import Description from "@/components/Description";
import { useEffect, useState, useRef } from "react";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInteractionDetected, setIsInteractionDetected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      if (!isInteractionDetected) {
        setIsInteractionDetected(true);
        setIsLoading(false);
        //audioRef.current = new Audio("/audio/bgAudio1.mp3");
        //audioRef.current.volume = 0.5; // Set the volume to 50%
        // audioRef.current.loop = true;
        // audioRef.current.play();
      }
    };

    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [isInteractionDetected]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Landing />

          <Description />

          <Projects />
          {/*  ----- TESTING AUDIO -----
          <button
            onClick={toggleMute}
            style={{ position: "fixed", bottom: 10, right: 10 }}
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
          */}
        </>
      )}
    </main>
  );
}
