"use client"; // Important for Framer Motion to work in the App Router

import { motion } from "framer-motion";

const Project = ({ title, image, description }) => {
  return (
    <motion.div
      className="p-4 border-2 border-black rounded-lg bg-white"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      <img src={image} alt={title} className="w-full rounded-lg" />
      <h2 className="mt-4 text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </motion.div>
  );
};

export default Project;
