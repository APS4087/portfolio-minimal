"use client";
import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import Project from "@/components/Project";
import FeaturedText from "./FeatureText";
import Lenis from "lenis";

export default function Projects() {
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const lenis = new Lenis();
    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main>
      <FeaturedText /> {/* Add the animated text component */}
      <Project setActiveMenu={setActiveMenu} />
      <Scene activeMenu={activeMenu} />
    </main>
  );
}
