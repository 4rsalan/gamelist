import React from 'react';
import {Modal, View, Button, Text, Dimensions} from "react-native";

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
        return (
            <Modal
                animationType="fade"
                transparent={true}
                onRequestClose={this.closeModal}
                visible={this.state.modalVisible}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00000080'
                }}>
                    <View  style={{
                        width: Dimensions.get('window').width * 0.8,
                        height: Dimensions.get('window').height * 0.6,
                        backgroundColor: '#fff', padding: 20,
                    }}>
                        <View>{this.props.children}</View>
                        <Button
                            title={"Close Modal"}
                            onPress={this.closeModal}>
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    };
}

export default OptionalModal;