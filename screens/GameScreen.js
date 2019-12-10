import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, Dimensions } from 'react-native';
import * as data from '../assets/data/words.json';

import Letter from '../components/Letter';

const GameScreen = props => {
  const [words, setWords] = useState(data);
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [wordNumber, setWordNumber] = useState(0);
  const [currentDesc, setCurrentDesc] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [wordLength, setWordLength] = useState(0);
  const [dictionarySize] = useState(Object.keys(words).length);
  const [letters, setLetters] = useState([]);

  let buttons = null;

  const getNextWord = () => {
    const number = Math.floor(Math.random() * dictionarySize);
    const word = Object.keys(words)[number];

    setWordNumber(number);
    setCurrentWord(word);
    setCurrentCharacter(0);
    setCurrentDesc(words[number]);
    setWordLength(word.length);

    for (let i = 0; i < word.length; ++i) {
      word[i];
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
      letters.splice(index, 1);

      // If this was the last letter get a new word
      if (currentCharacter === wordLength - 1) {
        getNextWord();
      }
      
    } else {
      getNextWord();
    }
  }

  if (currentWord === '') {
    getNextWord();
  }

  return (
    <View style={styles.screen}>
      <View>
        <Text>{currentWord}</Text>
        { 
          letters.map((button, index) => {
            return <Letter key={index} index={index} letter={button} onLetterPressed={checkLetter}></Letter>
          })
        }
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});