// components/FeaturedText.js
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FeaturedText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  // Transform scrollYProgress to control opacity and scale
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
        flexDirection: "column",
        fontSize: "100px",
        lineHeight: 1,
        maxWidth: "1280px",
        color: "black",
        textAlign: "center",
        minHeight: "100vh", // Ensure full viewport height
        padding: "40px",
        margin: "0 auto", // Center horizontally if needed
        boxSizing: "border-box", // Ensure padding is included in height calculation
      }}
    >
      <motion.h1
        style={{
          position: "relative",
          opacity,
          scale,
        }}
      >
        <span style={{ position: "relative" }}>
          <span
            className="shadow"
            style={{ position: "absolute", opacity: "20%" }}
          ></span>
          Featured{" "}
          <span style={{ display: "inline-block", position: "relative" }}>
            Projects
            {/* SVG for oval animation */}
            <motion.svg
              style={{
                position: "absolute",
                top: "-50px", // Adjust position to wrap around "Projects"
                left: "-60px",
                width: "500px", // Adjust oval size
                height: "180px",
              }}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.ellipse
                cx="50"
                cy="60"
                rx="120" // Adjust horizontal radius (width of oval)
                ry="30" // Adjust vertical radius (height of oval)
                stroke="grey"
                strokeWidth="2"
                style={{ pathLength }}
              />
            </motion.svg>
          </span>
        </span>
      </motion.h1>
    </div>
  );
};

export default FeaturedText;
