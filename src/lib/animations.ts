
import { type MotionProps } from "framer-motion";

export const fadeIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay }
});

export const slideUp = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
});

export const slideDown = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
});

export const scaleIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
});

export const staggerChildren = (staggerTime: number = 0.1): MotionProps => ({
  variants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerTime,
      }
    }
  },
  initial: "hidden",
  animate: "show"
});

export const staggerItem = {
  variants: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};
