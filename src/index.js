import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import wordGenerator from 'random-words';

const Letter = ({isRevealed, value}) => {
    return (
        <button
            className = "letter"
            style = {{
                border: isRevealed ? 'none' : '1px'
            }}
        >
            {isRevealed ? value : '_'}
        </button>
    )
}

function Word({word, revealed, isGameFinished}) {

    const wordItems = [...word].map((char, inx) =>
        <li key={inx}>
            <Letter 
                isRevealed = {isGameFinished ? isGameFinished : revealed.get(char)} 
                value={char}
            />
        </li>
    );

    return (
        <ul>{wordItems}</ul>
    )
}

const LetterButton = ({isClicked, onClick, letterInWord, letter}) => {

    return (
        <button
            className = {isClicked ? (letterInWord ? `inWordClicked letterButton` : `notInWordClicked letterButton`) : `unclicked letterButton`}
            onClick = {onClick}    
        >
            {letter}
        </button>
    )
}

function AlphabetButtons({revealed, onLetterSelected, word}) {

    const alphabetItems = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((char, inx) =>
        <li key={inx}>
            <LetterButton
                isClicked = {revealed.get(char)}
                onClick = {() => onLetterSelected(char)}
                letter = {char}
                letterInWord = {word.includes(char)}
            />
        </li>
    );

    return (
        <ul>{alphabetItems}</ul>
    );
}

const ResetButton = ({onClick}) => {
    return (
        <button
            className = "resetButton"
            onClick = {onClick}
        >
            NEW GAME
        </button>
    )
}

const Status = ({tries, isGameFinished}) => {
    return (
        <h2>
            {isGameFinished ? (tries > 0 ? `you win! 🎉🎉🎉` : `game over. you lose. 👎🏽👎🏻👎🏿`) : (tries === 1 ? `${tries} attempt remaining.` : `${tries} attempts remaining.`)}
        </h2>
    )
}

function Game() {

    const [word, setWord] = useState(randomWord());
    const [letters, setLetters] = useState([...word]);
    const [revealedMap, setRevealedMap] = useState(resetRevealedMap());
    const [tries, setTries] = useState(resetTries());
    const title = `==> hangman. <==`
    
    const gameFinished = (tries, letters) => {
        if (tries === 0 || letters.length === 0) {
            return true;
        } else return false;
    }
    
    const isGameFinished = gameFinished(tries, letters);
    
    const letterSelected = (char) => {

        if(revealedMap.get(char)){
            return;
        }

        let newMap = new Map(revealedMap);
                    newMap.set(char, true);
                    if(!word.includes(char)) {
                        setTries(tries -1);
                    } else {                        
                        setLetters(letters.filter(i => {return i !== char}));
                    }
                    setRevealedMap(newMap);
    }

    return (
        <div>
            <div><h1>{title}</h1></div>
        <div className="wordContainer">
            <Word 
                word = {word}
                revealed = {revealedMap}
                isGameFinished = {isGameFinished}
            />
        </div>
        <div className="statusContainer">
            <Status
                tries = {tries}
                isGameFinished = {isGameFinished}
            />
        </div>
        <div 
            className="alphabetContainer"
            style = {{
                visibility: isGameFinished ? 'hidden' : 'visible',
                display: isGameFinished ? 'none' : 'block'
            }}
        >
            <AlphabetButtons 
                word = {word}
                revealed = {revealedMap}
                onLetterSelected = {letterSelected}
            />
        </div>
        <div className="resetButtonContainer">
            <ResetButton
                onClick = {() => {
                    let newWord = randomWord();
                    setLetters([...newWord]);
                    setWord(newWord);
                    setRevealedMap(resetRevealedMap());
                    setTries(resetTries());
                }}
            />
        </div>
        </div>
    )

}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function resetTries() {
    return 8;
}

function resetRevealedMap() {
    return new Map([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((char) => [char, false]));
}

function randomWord() {
    let word;
    while(true) {
        word = wordGenerator();
        if (word.length > 5) {
            break;
        } 
    }
    return word.toUpperCase();
    
}