import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Letter = props => {
    return (
        <View>
            <Button title={props.letter} onPress={() => props.onLetterPressed(props.letter, props.index)} />
        </View>
    )
}

export default Letter;