import React from 'react';
import {View} from 'react-native';
import {Header, SearchBar} from 'react-native-elements';
import rawg from "../api/rawg"

 class HomeScreen extends React.Component{
     constructor(props){
         super(props);
         this.state = {
            searchTerm: '',
            searchResults: []
         }
     }

     onSearch = async term => {
         this.setState({
             searchTerm: term,
         });

         const response = await rawg.get('games', {
             params: {
                 search: term,
                 page_size: 10
             }
         });
         console.log(response.data.results);
         console.log("yeeet");
         this.setState({
             searchResults: response.data.results
         });
     };

     searchGames = term =>{
         this.setState({
             searchTerm: term,
         });

         console.log(term)
     };

    render(){
        //console.log("Rendered!");
         return(
           <View>
               <Header
                   centerComponent={{text: "Home page", style: {color: "#fff"}}}
               />
               <SearchBar
                   placeholder={"Search for a game..."}
                   onChangeText={this.onSearch}
                   searchIcon={false}
                   clearIcon={false}
                   value={this.state.searchTerm}
               />
           </View>
         );
    }
 }

 export default HomeScreen;