import React, {Component} from 'react';

import {styles} from '../styles/styles';



import {
	Text,
    	View,

       } from 'react-native';

//import {ListItem} from 'react-native-elements';


export default class TransactionRecordItem extends Component{
    constructor(props){
	super(props);
	this.state= {
	    date: props.date,
	    time: props.time,
	    amount: props.amount,
	    location: props.location
	};
    }
    render(){
	return (
	    <View style={[styles.history_item,{flexDirection:"row"}]}>
	      <View style={{flex:1, flexDirection:"column"}}>		
		<Text style={styles.text_label}>Date/Time:</Text>
		<Text style={styles.text_label}>Amount:</Text>
		<Text style={styles.text_label}>Location:</Text>
	      </View>
	      <View style={{flex:1, flexDirection:"column"}}>
		<Text >{this.state.date}     {this.state.time}</Text>
		<Text >RM{this.state.amount}</Text>
		<Text>{this.state.location}</Text>
	      </View>
	    </View>
	);
    }
}
/**

	      <Text> <Text style={{fontWeight:"bold", fontSize: 16}}>Date/Time:</Text> {this.state.date} <Text>{this.state.time}</Text></Text>
            <Text style={styles.history_amount}> <Text style={{fontWeight:"bold", fontSize: 15}}> Amount: </Text>  <Text >{amount}</Text></Text>
*/

/**

	    <ListItem
	      title= "DSAD"
	      subtitle= {
		      <View style={styles.subtitleView}>
			    <Text style={styles.defaultText}>5 months ago</Text>
			  </View>
		      }
  />*/
