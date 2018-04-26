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
	    progress: props.progress
	};
    }

    render(){
	return (
	    <Card 
	      title={this.props.cardId}
	      >
	      
	      <View style={{flexDirection:"row"}}>
		<Text style={styles.text_label}>ID:
		</Text>
		  <Text>{this.state.account_num}		  
		  </Text>
	      </View>

	      <View >
		<Text style={styles.text_label}>Limit Usage:</Text>
		<View style={{padding:10}}>
		  <Progress.Bar progress={this.state.progress}  />
		</View>
	      </View>

	    </Card>
	      );
/*	return (
	    <View >
	      <Text>{this.props.balance}</Text>
	    </View>

	    );*/
    }
}
