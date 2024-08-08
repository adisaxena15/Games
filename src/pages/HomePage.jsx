/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {Link} from 'react-router-dom'
import '../styles/homepage.css';
import countries from '../data/countries.json'
import brands from '../data/brand.json'
import movies from '../data/movies.json'
import words from '../data/wordList.json'
import Button from '../components/Button/Button';
import Aurora from '../components/Aurora';
import TextAnimation1 from '../components/TextAnimation1';
import GlassmorphicFooter from '../components/Footer';
import NeonButton from '../components/NeonButton';
import useWindowSize from '../components/useWindowSize';

export default function HomePage() {
  const [animateButtons, setAnimateButtons] = useState(false);
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 300], [0, -100]);
  function handleStartPlay() {
    setAnimateButtons(true);
  }
  function handleGoBack(){
    setAnimateButtons(false);
  }
//change initial position when it loads

  const { width } = useWindowSize();
  const buttonVariants = {
    initial: { 
      scale:width<500?0.45:width<800?0.7:1, y:width<520?190:width<1050? 100:0 },
    pressed: { scale: 0.5, y: '-200%'}
  };
  const NeonButtonVariants = {
    initial: { scale:0.5, y:'200%' },
    pressed: { scale: width<500?0.45:width<800?0.7:1, y: width<449?'-40%': width<625? '-60%' :width<1050?'-90%':width<1440?'-200%':'-300%'}
  };

  return (
    <div className="homepage">
      <motion.div
        className="intro-section"
        style={{ y: titleY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <TextAnimation1>HANGMAN</TextAnimation1>
      </motion.div>
      <motion.div
        className="info-section"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>About the Game</h2>
        <p>Challenge your mind and guess the word before the time runs out. Enjoy our modern neon design and have fun!</p>
        
        <motion.div id="btn-container" initial="initial" animate={animateButtons ? 'pressed' : 'initial'}>
          <motion.div
            transition={{ duration: 0.7, ease: 'easeInOut', delay:!animateButtons?0.3 : 0 }}
            variants={buttonVariants}
            style={{ display: "flex", gap: "10rem", marginTop:"10rem" }}
          >
            <Button onClick={handleStartPlay} text={"Start Game"}  />
            <Link to="instructions" style={{textDecoration: "none"}}><Button text={"How to Play"} /></Link>
          </motion.div>

          <motion.div
            transition={{ duration: 0.7, ease: 'easeInOut', delay:animateButtons?0.3 : 0 }}
            variants={NeonButtonVariants}
          >
           <motion.div id="button-container" style={{flexWrap: "wrap"}}>
            <Link to="game" state={{data:countries, width: width }}><NeonButton className="neon-purple">COUNTRIES</NeonButton></Link>
            <Link to="game" state={{data: movies, width: width}}><NeonButton className="neon-purple">MOVIES</NeonButton></Link>
            <Link to="game" state={{data: brands, width: width}}><NeonButton className="neon-purple">BRANDS</NeonButton></Link>
            <Link to="game" state={{data: words, width: width}}><NeonButton className="neon-purple">WORDS</NeonButton></Link>
            <NeonButton className="neon-purple" onClick={handleGoBack}><svg viewBox="0 0 384 512" width="50" height="50">
            <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
            </svg>
            </NeonButton>
            </motion.div>
          </motion.div>
        </motion.div>

        <Aurora />
        {<GlassmorphicFooter />}
      </motion.div>
    </div>
  );
}
