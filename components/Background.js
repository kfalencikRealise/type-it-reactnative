import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Background = props => {
    return (
        <ImageBackground style={styles.backgroundImage} source={require('../assets/background-screen1.png')}>
            { props.children }
        </ImageBackground>
    )
}

export default Background;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        backgroundColor: 'aqua'
    }
})