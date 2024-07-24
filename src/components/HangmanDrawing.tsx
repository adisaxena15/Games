
import React from "react"
import {motion} from 'framer-motion'
const HEAD = (
    <motion.div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid white",
        position: "absolute",
        top: "50px",
        right: "-30px",
      }}
      initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 1, type: 'spring', stiffness: 100, damping: 10 }}
    />
  )
  
  const BODY = (
    <motion.div
      style={{
        width: "10px",
        height: "100px",
        background: "white",
        position: "absolute",
        top: "120px",
        right: 0,
        
      }}

      initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    transition={{ duration: 2, type: 'spring', stiffness: 100, damping: 10 }}
  
    />
  )
  
  const RIGHT_ARM = (
    <motion.div
      style={{
        width: "100px",
        height: "10px",
        background: "white",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
      initial={{ scaleY: 0, scaleX: 0 }}
    animate={{ scaleY: 1, scaleX: 1 }}
    transition={{ duration: 2, type: 'spring', stiffness: 100, damping: 10 }}
    />
  )
  
  const LEFT_ARM = (
    <motion.div
      style={{
        width: "100px",
        height: "10px",
        background: "white",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
      initial={{ scaleY: 0, scaleX: 0 }}
    animate={{ scaleY: 1, scaleX: 1 }}
    transition={{ duration: 2, type: 'spring', stiffness: 100, damping: 10 }}
    />
  )
  
  const RIGHT_LEG = (
    <motion.div
      style={{
        width: "100px",
        height: "10px",
        background: "white",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
      initial={{ scaleY: 0, scaleX: 0 }}
    animate={{ scaleY: 1, scaleX: 1 }}
    transition={{ duration: 2, type: 'spring', stiffness: 100, damping: 10 }}
    />
  )
  
  const LEFT_LEG = (
    <motion.div
      style={{
        width: "100px",
        height: "10px",
        background: "white",
        position: "absolute",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
      initial={{ scaleY: 0, scaleX: 0 }}
    animate={{ scaleY: 1, scaleX: 1 }}
    transition={{ duration: 2, type: 'spring', stiffness: 100, damping: 10 }}
    />
    
  )
  
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
  
  type HangmanDrawingProps = {
    numberOfGuesses: number
  }
  
  export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
      <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses).map((key) => key)}
        <div
          style={{
            height: "50px",
            width: "10px",
            background: "white",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
        <div
          style={{
            height: "10px",
            width: "200px",
            background: "white",
            marginLeft: "120px",
          }}
        />
        <div
          style={{
            height: "400px",
            width: "10px",
            background: "white",
            marginLeft: "120px",
          }}
        />
        <div style={{ height: "10px", width: "250px", background: "white" }} />
      </div>
    )
  }