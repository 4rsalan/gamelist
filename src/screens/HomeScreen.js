import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';
import Header from '../components/Header';
import OptionalModal from '../components/OptionsModal';
import rawg from "../api/rawg"

 class HomeScreen extends React.Component{
     constructor(props){
         super(props);
         this.state = {
            searchTerm: '',
            searchResults: [],
            game: null,
            modalVisible: false
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
         this.setState({
             searchResults: response.data.results,
         });
     };

     openModal = ()=>{
         this.setState({modalVisible:!this.state.modalVisible});
     };

     closeModal = ()=>{
         this.setState({modalVisible:false});
     };

    render(){
        const {modalVisible, game} = this.state;

        console.log("Rendered HomeScreen!");
        console.log(`Modal state is: ${modalVisible}`);
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
                        <TouchableOpacity onPress={this.openModal}>
                            <ListItem
                                title={item.name}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
               {modalVisible ?
                   (<OptionalModal modalVisible={this.state.modalVisible} closeModalCallback={this.closeModal}>
                       <Text>Is this working?</Text>
                   </OptionalModal>)
                   : null
               }


           </View>
         );
    }
 }

 export default HomeScreen;