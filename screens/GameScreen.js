import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Vibration } from 'react-native';
import * as data from '../assets/data/words.json';

import Letter from '../components/Letter';
import ScoreBoard from '../components/ScoreBoard';
import Word from '../components/Word';
import Description from '../components/Description';


const GameScreen = props => {
  const [words, setWords] = useState(data);
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [wordNumber, setWordNumber] = useState(0);
  const [currentDesc, setCurrentDesc] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [wordLength, setWordLength] = useState(0);
  const [dictionarySize] = useState(Object.keys(words).length);
  const [letters, setLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(45);

  let timerInterval = null;

  const getNextWord = () => {
    const number = Math.floor(Math.random() * dictionarySize);
    const word = Object.keys(words)[number];

    // Don't get the super lengthy words as they won't fit on the screen
    if (word.length > 10) {
      return getNextWord();
    }

    setCurrentWord(word);
    setCurrentCharacter(0);
    setWordLength(word.length);

    // Description max length check
    if (words[word].length > 150) {
      setCurrentDesc(words[word].substring(0, 150 - 3) + '...');
    } else {
      setCurrentDesc(words[word]);
    }

    let shuffledLetters = word.split('');

    // Shuffle letters
    shuffledLetters.sort(() => Math.random() - 0.5);
    setLetters(shuffledLetters);
  }

  const checkLetter = (letter, index) => {
    // Check if the correct letter has been pressed
    if (letter === currentWord[currentCharacter]) {
      setCurrentCharacter(currentCharacter + 1);

      // Remove first letter from the array
      letters[index] = '*';

      // If this was the last letter get a new word
      if (currentCharacter === wordLength - 1) {
        setWordNumber(wordNumber + 1);
        setScore(score + 100 + ((wordLength * 10) / 2));
        setTimer(timer => timer + 2 + wordLength);
        getNextWord();
      }
      
    } else {
      Vibration.vibrate(500);
      setTimer(timer => timer - 5);
      getNextWord();
    }
  }
  
  useEffect(() => {
    if (timer <= 0) {
      Vibration.vibrate(2000);
      props.navigation.replace('GameOver', {score: score});
    }

    timerInterval = setTimeout(() => {
      setTimer(timer => timer - 1);
    }, 1000);

    return () => {
      clearTimeout(timerInterval);
    }
  });

  // Start game
  if (currentWord === '') {
    getNextWord();
  }

  return (
    <View style={styles.screen}>
      <Image style={{position: 'absolute', height: 300, resizeMode: 'cover', width: '100%', bottom: 0, left: 0}} source={require('../assets/background-screen.png')} />
      <ScoreBoard score={score} timer={timer} wordcount={wordNumber}></ScoreBoard>
      
      <Word word={currentWord}></Word>

      <View style={styles.letters}>
        { 
          letters.map((button, index) => {
            
              return (
                <View style={styles.letter} key={index}>
                  <Letter index={index} letter={button} onLetterPressed={checkLetter}></Letter>
                </View>
              )
            
          })
        }
      </View>

      <Description desc={currentDesc}></Description>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#1ea9d7'
  },
  letters: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 300,
    marginHorizontal: 'auto',
    flexWrap: 'wrap',
    marginVertical: 25
  },
  letter: {
    width: 40,
    height: 40,
    display: 'flex',
    margin: 10
  }
});