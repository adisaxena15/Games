/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, lazy } from 'react';
import {motion, AnimatePresence} from 'framer-motion' 
import {Link, useLocation} from 'react-router-dom'
import HangmanDrawing from '../components/HangmanDrawing';
import HangManWord from '../components/HangManWord';
import Keyboard from '../components/Keyboard';
import Modal from '../components/Modal';
import Button from '../components/Button/Button';
import Hint from '../components/Hint';
import TextAnimation1 from '../components/TextAnimation1';

export default function GamePage() {
  const location = useLocation();
  const {data, width} = location.state || {}
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);

  const [wordToGuess, setWordToGuess] = useState(()=>{
  return data[Math.floor(Math.random()*data.length)]; 
  });
  const filteredWord = wordToGuess.replace(/\s+/g, '');


  useEffect(() => {
    setIncorrectLetters(curr => {
      const newIncorrectLetters = guessedLetters.filter(
        letter => !filteredWord.includes(letter)
      );
      const updatedIncorrectLetters = [...curr];
      newIncorrectLetters.forEach(letter => {
        if (letter === ' ' || !updatedIncorrectLetters.includes(letter)) {
          updatedIncorrectLetters.push(letter);
        }
      });
      return updatedIncorrectLetters;
    });
  }, [guessedLetters, filteredWord]);


  function getWord(){
    return data[Math.floor(Math.random()*data.length)];
  }

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = filteredWord.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter:string) =>{
    if(guessedLetters.includes(letter) || isWinner || isLoser) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  },[guessedLetters])

  useEffect(()=>{
    function handler(e: KeyboardEvent){
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key);
    }
    document.addEventListener("keypress", handler);
    return()=>{
      document.removeEventListener("keypress", handler)
    }
  },[guessedLetters, isWinner, isLoser])

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (!showModal) {
        const key = e.key;
        if (key !== 'Enter') return;
        setWordToGuess(getWord());
        setGuessedLetters([]);
        setIncorrectLetters([]);
        e.preventDefault();
      }
    }

    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [showModal]);

  function handleClose(){
    setWordToGuess(getWord());
    setGuessedLetters([]);
    setIncorrectLetters([])
    setShowModal(false);
  }

useEffect(()=>{
  if(isWinner || isLoser){
    if(isWinner) setModalMessage("CONGRATULATIONS! YOU GUESSED RIGHT");
    if(isLoser) setModalMessage("OUT OF GUESSES! PRESS ENTER TO TRY AGAIN")
    setShowModal(true);
  }
},[incorrectLetters, isWinner])

function handleGoBack(){}

const handleHintClick = useCallback((hintLetters: any, counter: number) =>{
    setGuessedLetters(curr=> [...curr, hintLetters])
    const spaces = new Array(counter).fill(' ');
      setIncorrectLetters((curr)=>[...curr, ...spaces])
}, [guessedLetters])


  return (
    <>
    <div className="go-back-button" style={{position: "absolute", top: width<800?"1%":"3%", left:"3%" }}>
      <motion.div style={{scale: width<800? 0.5:1}} whileHover={{rotate: -90, y:100, scale: 0.8}} transition={{duration: 0.6}}> <Link to=".." relative="path" style={{ textDecoration: 'none' }}><Button text={"Back"} onClick={handleGoBack}/></Link></motion.div>
    </div>
    <div style={{
      maxWidth: "880px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
      }}>
      <div><TextAnimation1>HANGMAN</TextAnimation1></div>
      <div style={{fontSize: "2rem", textAlign: "center"}}>
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangManWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
      <Keyboard 
      disabled={isWinner || isLoser}
      activeLetters={guessedLetters.filter(letter=>filteredWord.includes(letter))}
      inactiveLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}
      />
        </div>
        <AnimatePresence><Modal show={showModal} handleClose={handleClose} isWinner={isWinner} word={wordToGuess}><h2>{modalMessage}</h2></Modal></AnimatePresence>
        {<Hint filteredWord={filteredWord} handleHintClick={handleHintClick}/>}
    </div>
    </>
  )
}
