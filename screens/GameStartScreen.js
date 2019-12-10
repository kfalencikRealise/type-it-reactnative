import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, Dimensions } from 'react-native';

const GameStart = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories</Text>
      <Button title="Start" onPress={() => {
        props.navigation.replace('Game');
      }} />
    </View>
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