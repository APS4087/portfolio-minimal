import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import useMousePosition from '../Description/useMousePosition';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const { x, y } = useMousePosition();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleMouseEnter = () => {
      cursorRef.current.classList.add(styles.hover);
    };

    const handleMouseLeave = () => {
      cursorRef.current.classList.remove(styles.hover);
    };

    const handleDescriptionEnter = () => {
      setIsHidden(true);
    };

    const handleDescriptionLeave = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.querySelectorAll('.description').forEach((el) => {
      el.addEventListener('mouseenter', handleDescriptionEnter);
      el.addEventListener('mouseleave', handleDescriptionLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      document.querySelectorAll('.description').forEach((el) => {
        el.removeEventListener('mouseenter', handleDescriptionEnter);
        el.removeEventListener('mouseleave', handleDescriptionLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`${styles.customCursor} ${isHidden ? styles.hidden : ''}`}
      style={{
        WebkitMaskPosition: `${x - 20}px ${y - 20}px`,
        WebkitMaskSize: '40px',
      }}
    ></div>
  );
}