import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

const Letter = props => {
    if (props.letter !== '*') {
        return (
            <View stlye={styles.letter}>
                <TouchableOpacity onPress={() => props.onLetterPressed(props.letter, props.index)}> 
                    <ImageBackground style={{width: '100%', height: '100%', textAlign:'center', alignItems: 'center', justifyContent: 'center'}} source={require('../assets/input-empty.png')}>
                        <Text style={styles.button}>{props.letter}</Text>
                    </ImageBackground>
                </TouchableOpacity >
            </View>
        )
    } else {
        return <View stlye={styles.letter}></View>
    }
}

export default Letter;

const styles = StyleSheet.create({
    letter: {
        flex: 1,
    },
    button: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -2
    }
});