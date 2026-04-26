import React from 'react';
import { motion } from 'framer-motion';

export default function AppleReveal({ children, delay = 0, width = "100%" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Apple-style spring/ease
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
