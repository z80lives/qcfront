import React, {Component} from 'react';
//import {StyleSheet} from 'react-native';
import {styles} from '../styles/styles';

import {
	Text,
    	View,

       } from 'react-native';

import {Card, Button} from 'react-native-elements';

import * as Progress from 'react-native-progress';


import { Actions } from 'react-native-router-flux';

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
	    idnum: "123445242342",
	    account_num: "1234-123-1234",
	    limit: "50",
	    progress: 20
	};
    }

    render(){
	return (
	    <Card
	      title={this.props.cardId}
	      containerStyle={{
		  flex:3, width: 300,
		  shadowOffset: {width: 10, height: 14},
		  shadowColor: '#621722',
		  shadowOpacity: 1.0,
		  elevation: 10,
		  marginBottom:20
	      }}
	      >
	      
	      <View style={{flex:1, flexDirection:"row"}}>
		<Text style={styles.text_label}>ID:</Text>
		<Text>{this.state.account_num}		  
		</Text>
	      </View>

	      <View style={{flex:1, flexDirection:"row"}}>
		<Text style={styles.text_label}>Limit Usage:</Text>
		<View style={{padding:10}}>
		  <Progress.Bar progress={0.3}  />
		</View>
	      </View>


	      <Button
		backgroundColor='#03A9F4'
		fontFamily='Lato'
		buttonStyle={[styles.defaultButton, {borderRadius: 0, marginLeft: 100, marginRight: 0, marginBottom: 0}]}
		onPress={
			 Actions.cardDetails
		  }
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
