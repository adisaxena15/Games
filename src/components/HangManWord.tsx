import React from 'react';
import {motion} from 'framer-motion'
type HangmanWordProps ={
  reveal?: boolean
  guessedLetters: string[]
  wordToGuess: string
}
export default function HangManWord({guessedLetters, wordToGuess, reveal=false  }: HangmanWordProps) {
  const letterVariants = {
    initial: { y: -200, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, type: 'spring', stiffness: 100, damping: 10 } }
  }
  return (
    <div style={{marginTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.25em", width: "90vw",fontSize: "3rem",fontWeight: "bold", textTransform: "uppercase"}}>
      {wordToGuess.split("").map((letter, index) => (
        <span style={{borderBottom: "0.1em solid white"}} key={index}>
            <motion.span 
            initial="initial"
            animate={guessedLetters.includes(letter) || reveal? "animate" : "initial"}
            variants = {letterVariants}
            style={{
              display: "inline-block",
                paddingTop: "5rem",
                visibility: guessedLetters.includes(letter) || reveal? 'visible': "hidden",
                color: !guessedLetters.includes(letter) && reveal ? "red" : "white"
            }}>
            {letter}
            </motion.span>
            </span>
      ))}
    </div>
  );
}
