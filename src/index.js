import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import wordGenerator from 'random-words';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const Letter = ({isRevealed, value}) => {
    return (
        <span
            className = "letter fira"
        >
            {isRevealed ? value : '_'}
        </span>
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
            className = {isClicked ? (letterInWord ? `inWordClicked alphabetButton inter` : `notInWordClicked alphabetButton inter`) : `unclicked alphabetButton inter`}
            onClick = {onClick}    
            title = 'you can also type a letter on your keyboard'
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
            title = "you can also press enter key to restart"
            className = "resetButton inter"
            onClick = {onClick}
        >
            NEW GAME
        </button>
    )
}

const Status = ({tries, isGameFinished}) => {
    return (
        <div className="statusContainer fira status">
            {isGameFinished ? (tries > 0 ? `you win! 🎉🎉🎉` : `game over. you lose. 👎🏽👎🏻👎🏿`) : (tries === 1 ? `${tries} attempt remaining.` : `${tries} attempts remaining.`)}
        </div>
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

    const keyboardEntry = (entry) => {
        if (entry === 'enter') {
            resetGame();
        } else if (! isGameFinished) {
            letterSelected(entry.toUpperCase());
        }
    }

    const resetGame = () => {
        let newWord = randomWord();
        setLetters([...newWord]);
        setWord(newWord);
        setRevealedMap(resetRevealedMap());
        setTries(resetTries());
    }

    return (
        <div>
        <KeyboardEventHandler
        handleKeys={[...'abcdefghijklmnopqrstuvwxyz', 'enter']}
        handleFocusableElements = {true}
        onKeyEvent={(key, _) => keyboardEntry(key)} />    
            <div
                className="titleContainer title fira"
            >   
                {title}
            </div>
        <div className="wordContainer">
            <Word 
                word = {word}
                revealed = {revealedMap}
                isGameFinished = {isGameFinished}
            />
        </div>
        <Status
            tries = {tries}
            isGameFinished = {isGameFinished}
        />
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
                onClick = {() => resetGame()}
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