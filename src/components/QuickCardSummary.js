import React, {Component} from 'react';
//import {StyleSheet} from 'react-native';
//import {styles} from '../../styles/styles';

import {
	Text,
    //	View,

       } from 'react-native';

import {Card, Button} from 'react-native-elements';

/*const cardStyle = StyleSheet.create({
    container: {
	width: 100,
	height: 100,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'white'
    }
    });*/

export default class QuickCardItem extends Component{
    constructor(props){
	super(props);
	this.state = {
	    account_num: "1234-123-1234",
	    limit: "50"
	};
    }
    
    render(){
	return (
	    <Card
	      title={this.props.cardId}
	      containerStyle={{width: 300}}
	      >
	      <Text>
		Account#: {this.state.account_num}
	      </Text>
	      <Text style={{marginBottom: 10}}>
		Balance: {this.props.balance}
	      </Text>
	      
	      <Button
		backgroundColor='#03A9F4'
		fontFamily='Lato'
		buttonStyle={{borderRadius: 0, marginLeft: 150, marginRight: 0, marginBottom: 0}}
		title='View' />
	      
	    </Card>
	      );
/*	return (
	    <View >
	      <Text>{this.props.balance}</Text>
	    </View>

	    );*/
    }
}

