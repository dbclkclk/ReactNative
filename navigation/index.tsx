import * as React from 'react';
import counterScreen from '../screens/counter';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import homeScreen from '../screens/home';

const RootStack = createStackNavigator(
  {
    'Home':  homeScreen,
    'Counter': counterScreen
  }, 
  {
      initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;