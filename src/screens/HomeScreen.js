import React from 'react';
import {View, FlatList} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';
import Header from '../components/Header';
import Card from '../components/Card';
import rawg from "../api/rawg"

 class HomeScreen extends React.Component{
     constructor(props){
         super(props);
         this.state = {
            searchTerm: '',
            searchResults: []
         }
     }

     //Function which fires on search which handles input stage and retrieves list of games using RAWG api
     onSearchHandler = async term => {
         this.setState({
             searchTerm: term,
         });

         const response = await rawg.get('games', {
             params: {
                 search: term,
                 page_size: 15
             }
         });
         console.log(response.data.results);
         console.log("yeeet");
         this.setState({
             searchResults: response.data.results
         });
     };

    render(){
        console.log("Rendered HomeScreen!");
         return(
           <View>
               <Header
                   headerText={'Home Page'}
               />
               <SearchBar
                   placeholder={"Search for a game..."}
                   onChangeText={this.onSearchHandler}
                   searchIcon={false}
                   clearIcon={false}
                   value={this.state.searchTerm}
               />
                <FlatList
                    data={this.state.searchResults}
                    renderItem={({item}) =>(
                        <ListItem
                            title={item.name}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
           </View>
         );
    }
 }

 export default HomeScreen;