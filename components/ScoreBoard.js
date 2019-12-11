import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

const ScoreBoard = props => {
    return (
      <View style={styles.board}>
        <View style={styles.panel}>
          <ImageBackground style={{width: '100%', height: '100%', flexDirection: 'row-reverse', alignItems: 'center'}} source={require('../assets/points.png')}>
            <Text style={styles.text}>{props.score}</Text>
          </ImageBackground>
        </View>

        <View style={styles.panel}>
          <ImageBackground style={{width: '100%', height: '100%', flexDirection: 'row-reverse', alignItems: 'center'}} source={require('../assets/word-count.png')}>
            <Text style={styles.text}>{props.wordcount}</Text>
          </ImageBackground>
        </View>

        <View style={styles.panel}>
          <ImageBackground style={{width: '100%', height: '100%', flexDirection: 'row-reverse', alignItems: 'center'}} source={require('../assets/timer.png')}>
            <Text style={styles.text}>{props.timer}s</Text>
          </ImageBackground>
        </View>


      </View>
    )    
}

export default ScoreBoard;

const styles = StyleSheet.create({
    board: {
      flex: 1,
      justifyContent: 'flex-start',
      position: 'absolute',
      left: 10,
      top: 40,
    },
    panel: {
      width: 126,
      height: 41,
    },
    text: {
      fontSize: 16,
      textAlign: 'right',
      marginRight: 10,
      marginTop: -2,
      fontWeight: 'bold',
      color: '#222'
    }
});