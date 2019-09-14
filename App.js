import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const AppNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        List: ListScreen,
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
    render(){
        return(<AppContainer/>);
    }
}
