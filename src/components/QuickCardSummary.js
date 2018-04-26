import React, {Component} from 'react';
//import {StyleSheet} from 'react-native';
//import {styles} from '../../styles/styles';

import {
	Text,
    //	View,

       } from 'react-native';

import {Card, Button} from 'react-native-elements';
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
	    account_num: "1234-123-1234",
	    limit: "50"
	};
    }

    render(){
	return (
	    <Card
	      title={this.props.cardId}
	      containerStyle={{
					width: 300,
					shadowOffset: {width: 10, height: 14},
					shadowColor: '#621722',
					shadowOpacity: 1.0,
					elevation: 10,
					marginBottom:20
				}}
	    >
	      <Text>
					<Text style={{fontWeight:"bold", fontSize: 16}}>
						Account#:
					</Text>
					<Text>
						{this.state.account_num}
					</Text>
	      </Text>
	      <Text style={{marginBottom: 10}}>
					<Text style={{fontWeight:"bold", fontSize: 16}}>
						Balance:
					</Text>
					<Text>
						{this.props.balance}
					</Text>
	      </Text>

	      <Button
		backgroundColor='#03A9F4'
		fontFamily='Lato'
		buttonStyle={{borderRadius: 0, marginLeft: 150, marginRight: 0, marginBottom: 0}}
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
