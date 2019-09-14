import React from 'react';
import {View, Text} from 'react-native';


class ListScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            games: [],
        }
    }


    render(){
        console.log("Rendered ListScreen!");
        return(
            <View>
            <Text>List View!</Text>
            </View>
        )
    }
}

export default ListScreen;