'use client'
import styles from './style.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './useMousePosition';

export default function Index() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 500 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
            maskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
            maskSize: `${size}px`,
          }}
          
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <p>
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>
    </main>
  );
}
