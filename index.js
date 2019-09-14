import {AppRegistry} from 'react-native';
import React from 'react';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";

import App from './App';
import {name as appName} from './app.json';

/*
const App = () =>{
    return(
        <HomeScreen/>
    )
};
*/

AppRegistry.registerComponent(appName, () => App);
