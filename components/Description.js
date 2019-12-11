import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

const Description = props => {
    return (
      <View style={styles.board}>
        <View style={styles.panel}>
          <ImageBackground style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}} source={require('../assets/word-description.png')}>
            <Text style={styles.text}>{props.desc}</Text>
          </ImageBackground>
        </View>
      </View>
    )    
}

export default Description;

const styles = StyleSheet.create({
    board: {
      height: 81,
      marginBottom: 25
    },
    panel: {
      width: 400,
      height: 81,
    },
    text: {
      fontSize: 14,
      color: '#222',
      paddingHorizontal: 25,
      textAlign: 'center'
    }
});