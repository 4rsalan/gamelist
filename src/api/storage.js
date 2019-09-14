import AsyncStorage from '@react-native-community/async-storage';
//import {Alert} from 'react-native';


export const storeItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch(e) {
        console.log(e)

    }
    console.log('Item Stored!')
};

export const retrieveData = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.log(e);
    }
};

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Removed Item!')
    } catch(e) {
        console.log(e);
        console.log('Failed to remove item')
    }
};

export const modifyItem = async (key, value) => {
    try {
        await removeValue(key);
        await storeItem(key, value);
    } catch(e) {
        console.log(e);
    }
};