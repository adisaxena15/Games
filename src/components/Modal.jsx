/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import '../styles/modal.css';
import NeonButton from './NeonButton';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ show, handleClose, children,word, isWinner }) => {

  useEffect(()=>{
    if(show){
       const timer = setTimeout(handleClose, 3000);
       return ()=> clearTimeout(timer); 
    }
  },[show, handleClose])
  if (!show) {
    return null;
  }
  
  return (
    <AnimatePresence>
    <motion.div className="modal-overlay"
    initial={{opacity: 0, y: 25}} animate={{opacity: 1, y: 0}}
    >
      <div className="modal-content">
        <h2 style={{color: isWinner?"green": "red"}}>The Word was: {word}</h2>
        {children}
        <NeonButton NeonButton onClick={handleClose} className="neon-purple">CLOSE</NeonButton>
      </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
