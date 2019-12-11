import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = props => {
    return (
      <TouchableOpacity onPress={props.onPress}> 
        <Text style={{...styles.button, backgroundColor: props.color}}>{props.title}</Text>
      </TouchableOpacity >
    )    
}

export default Button;

const styles = StyleSheet.create({
    button: {
      fontWeight: 'bold',
      fontSize: 14,
      padding: 10,
      backgroundColor: 'blue',
      color: 'white',
      borderRadius: 3,
      textTransform: 'uppercase'
    }
});