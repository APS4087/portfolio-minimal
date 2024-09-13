'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './style.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const cursor = useRef(null);
  const cursorSize = isHovered ? 20 : 15; // Make the cursor bigger when hovered

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Smooth out the mouse movement
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (event) => {
    mouse.x.set(event.clientX);
    mouse.y.set(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    // Detect hover over more clickable elements
    const clickableElements = document.querySelectorAll(
      'button, a, [role="button"], input, textarea, select'
    );
    clickableElements.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsHovered(true));
      el.addEventListener('mouseleave', () => setIsHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      clickableElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => setIsHovered(true));
        el.removeEventListener('mouseleave', () => setIsHovered(false));
      });
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursor}
        className={styles.cursor}
        
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 10,
          mass: 0.8,
          duration: 0.4,
        }}
        style={{
          width: cursorSize,
          height: cursorSize,
          x: smoothMouse.x,
          y: smoothMouse.y,
        }}
      />
    </>
  );
}
