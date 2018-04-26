import React, {Component} from 'react';

import {
    View,
    Text,
    Switch,
    Button
} from 'react-native';


import {styles} from '../styles/styles';
//import { Actions } from 'react-native-router-flux';


export class CardDetailsScreen extends Component{

    constructor(props){
	super(props);
	this.state = {
	    cardId: "123-124-3123",
	    SN: "1234-2133-3123",
	    balance: "12.30",
	    active: true,
	    blockrequest: false
	};
	
    }
    
    render(){
	return(
	    <View>
	      <Text>Card Details: {this.state.cardId}</Text>
	      <Text>S/N: {this.state.SN}</Text>
	      <Text>Balance: {this.state.balance}</Text>
	      <Text>Activate:</Text>

	      <Switch
		onPress={()=>this.state.active=false}
		value={this.state.active}
		/>
		<Button
		  onPress={()=>{console.log("Hei");}}
		title="Block"
		/>
	    </View>
	);
    }
}


export default CardDetailsScreen;
