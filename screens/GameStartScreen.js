import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Image, ScrollView, Dimensions } from 'react-native';

const GameStart = props => {
  return (
    <View style={styles.screen}>
      <ImageBackground style={{width: '100%', height: '100%', resizeMode: 'cover', backgroundColor: 'aqua', flex: 1, justifyContent: 'center'}} source={require('../assets/background-screen1.png')}>

        <View style={styles.box}>          
          <ImageBackground style={styles.boxBackground} source={require('../assets/board.png')}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text>The objective of the game is to type in the word shown as quickly as possible but look out as the time is ticking and every misspelled word results in a time penalty.</Text>

            <View style={styles.button}>
              <Button title="Easy" onPress={() => {
                props.navigation.replace('Game');
              }} />
            </View>
            
            <View style={styles.button}>
              <Button title="Normal" onPress={() => {
                props.navigation.replace('Game');
              }} />
            </View>

            <View style={styles.button}>
              <Button title="Hard" onPress={() => {
                props.navigation.replace('Game');
              }} />
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GameStart;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15
  },  
  box: {
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 335
  },
  boxBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 335
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    margin: 5
  }
});