/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../components/Button/Button';
import {Link} from 'react-router-dom'
import "../styles/instructions.css"
import ButtonSparkles from '../components/ButtonSparkles/ButtonSparkles';
export default function Instructions() {
  function handleGoBack(){}
  return (
    <>
    <div className="how-to-play-container">
      <h1>How to Play Hangman</h1>
      <div className="rules-section">
        <h2>Game Rules</h2>
        <ul>
          <li>Guess the word one letter at a time.</li>
          <li>You have a limited number of guesses before the game is over.</li>
          <li>If you guess a correct letter, it will appear in the word.</li>
          <li>If you guess an incorrect letter, you lose a life.</li>
          <li>The game ends when you guess the word correctly or run out of lives.</li>
          <li> <span style={{fontWeight: "1000"}}>Hint Button:</span> be careful, if the word size is below 4, you get triple penalty, if below 7, you get double</li>
          <p></p>
          <div style={{position: "fixed", top: "40"}}><ButtonSparkles/></div>
        </ul>
      </div>
      <div className="controls-section">
        <h2>Controls</h2>
        <ul>
          <li>Use the keyboard to input your guesses.</li>
          <li>Press "Enter" to submit your guess.</li>
          <li>Click the "New Game" button to start a new game.</li>
        </ul>
      </div>
      <div className="tips-section">
        <h2>Tips</h2>
        <ul>
          <li>Start with common vowels like 'A', 'E', 'I', 'O', 'U'.</li>
          <li>Guess common consonants like 'R', 'S', 'T', 'L', 'N'.</li>
          <li>Look for patterns and try to guess smaller words first.</li>
        </ul>
      </div>
      <div className="back-button">
      </div>
    </div>
    <div style={{display: "flex", justifyContent: "center"}}>
      <Link to="/" style={{ marginLeft: 0, textDecoration: 'none'}}><Button text={"Go Back"} onClick={handleGoBack}/></Link>
      </div>
    </>
  );
}
