// components/Project.js
import { motion } from "framer-motion";
import styles from "./Project.module.css";

const projectVariants = {
  offscreen: {
    x: 300, // Start from the right
    y: -300, // Start from the top
    opacity: 0,
  },
  onscreen: {
    x: 0, // Move to the center
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
  exit: {
    x: -300, // Exit to the left
    y: 300, // Exit to the bottom
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function Project({ projectNumber, title, image }) {
  return (
    <motion.div
      className={styles.project}
      initial="offscreen"
      whileInView="onscreen"
      exit="exit"
      viewport={{ once: false, amount: 0.8 }}
      variants={projectVariants}
    >
      <div className={styles.projectImage}>
        <img src={image} alt={`Project ${projectNumber}`} />
      </div>
      <div className={styles.projectInfo}>
        <h2>{title}</h2>
        <a href="#">Open Project {projectNumber}</a>
      </div>
    </motion.div>
  );
}
