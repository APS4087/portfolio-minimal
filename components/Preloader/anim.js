export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1, // Make it fully visible for better visual clarity
    transition: {
      duration: 1.2, // Slightly longer duration for smoother fade-in
      delay: 0.1, // Adjust delay for better timing
    },
  },
};

export const slideUp = {
  initial: {
    transform: "translateY(0)",
  },
  exit: {
    transform: "translateY(-100vh)",
    transition: {
      duration: 1, // Increase the duration for smoother animation
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1, // Adjust delay for better coordination
    },
  },
};
