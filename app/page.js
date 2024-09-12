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

  useEffect(() => {
    const handleInteraction = () => {
      if (!isInteractionDetected) {
        setIsInteractionDetected(true);
        setIsLoading(false);
      }
    };

    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [isInteractionDetected]);

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
