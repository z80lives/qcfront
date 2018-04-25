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
	    date:"21-04-2018"
	};
    }
    render(){
	var amount = this.props.amount;
	return (
	    <View style={styles.history_item}>
	      <Text> <Text style={{fontWeight:"bold", fontSize: 16}}>Date:</Text> {this.state.date}</Text>
            <Text style={styles.history_amount}> <Text style={{fontWeight:"bold", fontSize: 15}}> Amount: </Text>  <Text >{amount}</Text></Text>
	    </View>
	);
    }
}

/**

	    <ListItem
	      title= "DSAD"
	      subtitle= {
		      <View style={styles.subtitleView}>
			    <Text style={styles.defaultText}>5 months ago</Text>
			  </View>
		      }
  />*/
