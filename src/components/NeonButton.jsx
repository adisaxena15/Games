/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion} from 'framer-motion';
import '../assets/colors.css';
import '../styles/homepage.css'

export default function NeonButton({ className, children, onClick }){
  
  return (
    <motion.button
      className={`button ${className}`}
      initial={{ boxShadow: 'none' }}
      whileHover={{
        boxShadow: [
          '0 0 10px var(--neon-glow), 0 0 20px var(--neon-glow), 0 0 30px var(--neon-glow), 0 0 40px var(--neon-glow)',
          '0 0 20px var(--neon-glow), 0 0 30px var(--neon-glow), 0 0 50px var(--neon-glow), 0 0 70px var(--neon-glow)',
          '0 0 15px var(--neon-glow), 0 0 25px var(--neon-glow), 0 0 35px var(--neon-glow), 0 0 55px var(--neon-glow)',
          '0 0 25px var(--neon-glow), 0 0 35px var(--neon-glow), 0 0 60px var(--neon-glow), 0 0 80px var(--neon-glow)',
        ],
        transition: { duration: 1.5, repeat: Infinity, repeatType: 'mirror' }
      }}
      exit={{
        boxShadow: "none",
        transition: { duration: 0.5 }
      }}
      onClick={onClick}
    >
      <span className="spin-bg"></span>
      <span className="button-content">{children}</span>
    </motion.button>
  );
}