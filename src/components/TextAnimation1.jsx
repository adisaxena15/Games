/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'

function TextAnimation1({children}) {
  return (
    <section className="grid h-screen place-content-center gap-2 px-8 text-black" id="text-container">
        <motion.h1 
        initial="initial"
        whileHover="hovered">
            <div>
                {children.split("").map((l,i)=>{
                return (
                <motion.span
                transition={{duration: 0.25, ease: 'easeInOut',delay: 0.025* i}} 
                variants={{
                    initial: {y:0},
                    hovered: {y:"-100%"}
                }}
                className="inline-block"
                key={i}>{l}</motion.span>)
                })}
            </div>

            <div className="aboslute inset-0">
            {children.split("").map((l,i)=>{
                return (
                <motion.span 
                transition={{duration: 0.25, ease: 'easeInOut',delay: 0.025* i}} 
                variants={{
                    initial: {y:"100%"},
                    hovered: {y:"-100%"}
                     }}
                className="inline-block"
                key={i}>{l}</motion.span>
                    )
            })}</div>
            </motion.h1>
    </section>
  )
}
export default TextAnimation1
