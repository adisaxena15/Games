/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/footer.css';

const GlassmorphicFooter = () => {
  const scrollingText = ['HANGMAN', 'TIC-TAC-TOE', 'CONNECT 4', 'HANGMAN', 'TIC-TAC-TOE', 'CONNECT 4','HANGMAN', 'TIC-TAC-TOE', 'CONNECT 4'];

  const duplicatedText = [...scrollingText];
  return (
/*     <footer className="glassmorphic-footer">
      <motion.div
        className="footer-links"

        animate={{ x: ['0%','100%'] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' }} 
      >
        {duplicatedText.map((text, i) => (
          <a className= "footer-items" key={i} href={text === "HANGMAN"? "game":"#"}>
            {text}
          </a>
        ))}
      </motion.div>
    </footer> */
    <div className="wrapper">
      <div className="marquee">
        <div className = "marquee-group">
        {scrollingText.map((text, i) => (
          <a className= "footer-items" key={i} href={text === "HANGMAN"? "game":"#"}>
            {text}
          </a>
        ))}
        </div>
        <div className = "marquee-group">
        {scrollingText.map((text, i) => (
          <a className= "footer-items" key={i} href={text === "HANGMAN"? "game":"#"}>
            {text}
          </a>
        ))}
        </div>
        <div className = "marquee-group">
        {scrollingText.map((text, i) => (
          <a className= "footer-items" key={i} href={text === "HANGMAN"? "game":"#"}>
            {text}
          </a>
        ))}
        </div>
        <div className = "marquee-group">
        {scrollingText.map((text, i) => (
          <a className= "footer-items" key={i} href={text === "HANGMAN"? "game":"#"}>
            {text}
          </a>
        ))}
        </div>
      </div>
    </div>
  );
};

export default GlassmorphicFooter;
