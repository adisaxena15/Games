/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {motion, useAnimation} from "framer-motion"
import ButtonSparkles from './ButtonSparkles/ButtonSparkles';
export default function Hint({ filteredWord, handleHintClick}) {

   const [tempWord, setTempWord] = useState([]);
   useEffect(()=>{setTempWord([...filteredWord])},[filteredWord])

    const uniqueLetters = new Set(filteredWord);
    const length = uniqueLetters.size<filteredWord.length?uniqueLetters.size:filteredWord.length;
    let counter = 0;
    if(length<4) counter=3;
    else if(length<7) counter=2;
    else counter=1;

    function handleClick(){
        const randomIndex = Math.floor(Math.random() * tempWord.length);
        const char = tempWord[randomIndex]
        const newTempFilteredWord = tempWord.filter(letter => letter !== char);
        setTempWord(newTempFilteredWord)
        handleHintClick(char, counter)
        counter = 1;
    }

    const controls = useAnimation();
    useEffect(() => {
        const animateCircle = async () => {
            const radius = 50;
            const centerX = 0;
            const centerY = 0;
            const duration = 5;

            for (let i = 0; i <= 360; i++) {
                const angle = (i * Math.PI) / 180;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);

                await controls.start({
                    x,
                    y,
                    transition: { duration: duration / 360, ease: "linear" },
                });
            }
            animateCircle();
        };

        animateCircle();
    }, [controls]);

  return (
    <motion.div
    animate={controls}
    initial={{x: 0, y: 0}}
    style={{
        position: "absolute",
        top: "20%",
        left: "20%",
        padding: "10px"
    }}>
     <ButtonSparkles handleClick={handleClick}/>
    </motion.div>
  )
}