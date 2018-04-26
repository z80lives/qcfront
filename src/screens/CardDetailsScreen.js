import React, {Component} from 'react';

import {
    View,
    Text,
    Switch,
    Button
} from 'react-native';
import {Card} from 'react-native-elements';

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
	    <View style={{height: "90%"}}>
        <Card style={styles.card_item_details}
          containerStyle={{
          elevation: 10, shadowColor: '#cccccc',
          shadowRadius: 10,
          shadowOpacity: 0.6,
          elevation: 15,
          flex:1,
          flexDirection: 'row',
          justifyContent: 'center',
          shadowOffset: {width: 0,height: 4}}}>
          <View style={{flex:1}}>

    	      <Text style={styles.details_text}>  <Text style={{fontWeight:"bold", fontSize: 16}}>Card Details: </Text> {this.state.cardId}</Text>
    	      <Text style={styles.details_text}>  <Text style={{fontWeight:"bold", fontSize: 16}}>S/N: </Text>{this.state.SN}</Text>
    	      <Text style={styles.details_text}>  <Text style={{fontWeight:"bold", fontSize: 16}}>Balance:</Text> {this.state.balance}</Text>
    	      <Text style={styles.details_text}>  <Text style={{fontWeight:"bold", fontSize: 16}}>Activate: </Text></Text>

	      <Switch
      		onPress={()=>this.state.active=false}
      		value={this.state.active}
		    />
        </View>

        <View style={styles.card_item_details_btn}>
      		<Button style={styles.defaultButton}
      		  onPress={()=>{console.log("Hei");}}
      		title="Block"
      		/>
        </View>
    </Card>
	    </View>
	);
    }
}


export default CardDetailsScreen;
