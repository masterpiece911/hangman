import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import wordGenerator from 'random-words';

function Letter(props) {

    const isRevealed = props.isRevealed;
    const value = props.value;

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

function Word(props) {
    const word = props.word;
    const revealedMap = props.revealed;
    const isGameFinished = props.isGameFinished;
    const wordItems = [...word].map((char, inx) =>
        <li key={inx}>
            <Letter 
                isRevealed={isGameFinished ? isGameFinished :revealedMap.get(char)} 
                value={char}
            />
        </li>
    );

    return (
        <ul>{wordItems}</ul>
    )
}

function LetterButton(props) {

    const isClicked = props.isClicked;
    const onClick = props.onClick;
    const letterInWord = props.letterInWord;
    const letter = props.letter;

    const buttonClass = (isClicked, letterInWord) => {
        if (isClicked) {
            if (letterInWord) {
                return 'inWordClicked letterButton';
            } else {
                return 'notInWordClicked letterButton';
            }
        } else return 'unclicked letterButton'
    }

    return (
        <button
            className = {buttonClass(isClicked, letterInWord)}
            onClick = {onClick}    
        >
            {letter}
        </button>
    )
}

function AlphabetButtons(props) {
    const revealedMap = props.revealed;
    const letterSelectedFunction = props.onLetterSelected;
    const word = props.word;
    const alphabetItems = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((char, inx) =>
        <li key={inx}>
            <LetterButton
                isClicked = {revealedMap.get(char)}
                onClick = {() => letterSelectedFunction(char)}
                letter = {char}
                letterInWord = {word.includes(char)}
            />
        </li>
    );

    return (
        <ul>{alphabetItems}</ul>
    );
}

function ResetButton(props) {
    return (
        <button
            className = "resetButton"
            onClick = {props.onClick}
        >
            NEW GAME
        </button>
    );
}

function Status(props) {

    const tries = props.tries;
    const isGameFinished = props.isGameFinished;
    const status = (tries, isGameFinished) => {
        if (isGameFinished) {
            if (tries > 0) {
                return `you win! 🎉🎉🎉`
            } else {
                return `game over.`
            }
        } else {
            if ( tries === 1) {
                return `${tries} attempt remaining.`
            } else {
                return `${tries} attempts remaining.`
            }
        }
    }

    return (
        <h2>{status(tries, isGameFinished)}</h2>
    );

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