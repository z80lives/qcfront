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
	var amount = "Amount: "+this.props.amount;
	return (
	    <View style={{flex:1, flexDirection:"column", backgroundColor: 'white', marginTop: 4, marginBottom: 4, padding: 6}}>
	      <Text>Date: {this.state.date}</Text>
              <Text>{amount}</Text>
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
