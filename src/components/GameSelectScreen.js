import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';

const GameSelectScreen = props =>{

    return(
        <View>
            <Text>{props.title}</Text>
            <Image
                source={{uri: props.image}}
                style={{
                    width: Dimensions.get('window').width * 0.6,
                    height: Dimensions.get('window').height * 0.4,
                }}
            />
        </View>
    );
};

export default GameSelectScreen;