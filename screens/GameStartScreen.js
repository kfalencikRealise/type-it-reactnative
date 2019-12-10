import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, Dimensions } from 'react-native';

import Background from '../components/Background';

const GameStart = props => {
  return (
    <Background>
      <View style={styles.screen}>
        <Text>Please select difficulty level</Text>

        <View>
          <Button title="Easy" onPress={() => {
            props.navigation.replace('Game');
          }} />
          <Button title="Normal" onPress={() => {
            props.navigation.replace('Game');
          }} />
          <Button title="Hard" onPress={() => {
            props.navigation.replace('Game');
          }} />
        </View>
      </View>
    </Background>
  );
};

export default GameStart;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});