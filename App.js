import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

  const AppNavigator = createStackNavigator(
      {
      Home: HomeScreen,
      List: ListScreen,
    },
      {
        initialRouteName: 'Home'
      }
      );

  export default createAppContainer(AppNavigator);
