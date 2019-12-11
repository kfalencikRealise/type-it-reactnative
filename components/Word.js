import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

const Word = props => {
    return (
      <View style={styles.board}>
        <View style={styles.panel}>
          <ImageBackground style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'flex-end'}} source={require('../assets/top-board-long.png')}>

            <View style={styles.letters}>
              {
                props.word.split('').map((letter, index) => {
                  if (props.character <= index) {
                    return <Text key={index + letter} style={styles.text}>{letter}</Text>
                  } else {
                    return <Text key={index + letter} style={{...styles.text, ...styles.textComplete}}>{letter}</Text>
                  }
                })
              }
            </View>
          </ImageBackground>
        </View>
      </View>
    )    
}

export default Word;

const styles = StyleSheet.create({
    board: {
      height: 100
    },
    panel: {
      width: 300,
      height: 100,
    },
    letters: {
      flexDirection: 'row',
    },
    text: {
      fontSize: 22,
      color: '#222',
      fontWeight: 'bold',
      marginBottom: 8
    },
    textComplete: {
      color: 'green'
    }
});