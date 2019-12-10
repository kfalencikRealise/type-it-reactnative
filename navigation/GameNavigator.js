import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GameStartScreen from '../screens/GameStartScreen';
import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';

const GameNavigator = createStackNavigator({
  GameStart: GameStartScreen,
  Game: GameScreen,
  GameOver: GameOverScreen
});

export default createAppContainer(GameNavigator);