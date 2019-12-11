import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

import ButtonReal from '../components/ButtonReal';

const GameStart = props => {
  const [difficulty, setDifficulty] = useState('normal');

  const score = props.navigation.getParam('score');

  return (
    <View style={styles.screen}>
      <Image style={{position: 'absolute', height: 300, resizeMode: 'cover', width: '100%', bottom: 0, left: 0}} source={require('../assets/background-screen.png')} />

      <View style={styles.box}>          
        <ImageBackground style={styles.boxBackground} source={require('../assets/board.png')}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.text}>YOUR SCORE</Text>
          <Text style={styles.text}>{score}</Text>
          <View style={styles.button}>
            <ButtonReal title="Restart" color="#1ea9d7" onPress={() => {
              props.navigation.replace('Game');
            }} />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default GameStart;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ea9d7'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15
  },  
  box: {
    height: 335,
    width: 350,
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  boxBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10
  },
  button: {
    margin: 5
  }
});