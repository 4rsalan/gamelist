import React from 'react';
import {Modal, View, Text, Dimensions, StyleSheet} from "react-native";
import { Button } from 'react-native-elements';


class OptionalModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {modalVisible: this.props.modalVisible}
    }

    closeModal = ()=>{
        this.setState({modalVisible:false});
        this.props.closeModalCallback(false);
    };

    render() {
        console.log("Modal Rendered!");
        const {outerStyle, innerStyle} = styles;

        return (
            <Modal
                animationType="fade"
                transparent={true}
                onRequestClose={this.closeModal}
                visible={this.state.modalVisible}
            >
                <View style={outerStyle}>
                    <View style={innerStyle}>
                        <View>{this.props.children}</View>
                        <Button
                            title={this.props.closeButtonName || "Close Modal"}
                            onPress={this.closeModal}
                            type={"outline"}
                        >
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    };
}

const styles = StyleSheet.create({
   outerStyle:{
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#00000080',
       shadowColor: '#000',
       shadowOffset: {width: 0, height: 2},
       shadowOpacity: 0.1,
       shadowRadius: 2,
   },
   innerStyle:{
       width: Dimensions.get('window').width * 0.8,
       height: Dimensions.get('window').height * 0.6,
       backgroundColor: '#fff', padding: 20,
       borderWidth: 1,
       borderRadius: 2,
       borderColor: '#ddd',
       borderBottomWidth: 0,
   },



});

export default OptionalModal;