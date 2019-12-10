import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, Dimensions } from 'react-native';
import * as data from '../assets/data/words.json';

const GameScreen = props => {
  const [words, setWords] = useState(data);
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [dictionarySize] = useState(Object.keys(words).length);

  const getNextWord = () => {
    const number = Math.floor(Math.random() * dictionarySize - 1);
    setCurrentCharacter(0);

    setCurrentWord(Object.keys(words)[number]);
    let words = Object.keys(words).map(function(number) {
      return word[number];
    });
    //currentDesc = words[number];
  }

  getNextWord();

  return (
    <View style={styles.screen}>
      <Text>{data['word']} - {dictionarySize} {currentWord}</Text>
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