import React from "react"
import {motion} from 'framer-motion'
import KEYS from '../data/keys'
import '../styles/gamepage.css'

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.05 }}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.3rem",
        marginTop: "4rem",
      }}
    >
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <motion.div 
          key={key}
          style={{ 
            background: isInactive 
            ? "linear-gradient(90deg, #ff0000, #ff7373)" 
            : isActive 
            ? "linear-gradient(90deg, #00ff00, #00e600)" 
            : "linear-gradient(90deg, #03a9f4, #f441a5)"
          }}
          className={ isInactive 
            ? "letter-container-red" 
            : isActive 
            ? "letter-container-green" 
            : "letter-container-default"}
            animate={isInactive?{x: [0, -15, 15, -15, 15, 0]}: isActive?{scale:[0.8, 1.2, 1]}:{}}
            transition={isInactive?{duration: 0.6}:isActive?{duration: 0.6}: {}}
            >
              <button
              id="letter-button"
              onClick={() => addGuessedLetter(key)}
              style={{width: "5rem"}}
              disabled={isInactive || isActive || disabled}
              key={key}
              >
                {key}
            </button>
          </motion.div>
        )
      })}
    </motion.div>
  )
}