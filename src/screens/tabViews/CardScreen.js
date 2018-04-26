import React, {Component} from 'react';
import {
    View,
    FlatList,
       } from 'react-native';

import {styles} from '../../styles/styles';

import CardView from '../../components/QuickCardSummary.js';
import MainCardView from '../../components/QCMainCard.js';

import ActionButton from 'react-native-action-button';

var kidNames = [
    "Ali",
    "Samantha",
    "Samuel",
    "Sarah"
];


export class CardListScreen extends Component{    
    constructor(props){	
	super(props);
	this.state ={	    
	};
	this.state.data = [];
	for(let i=0; i< 3; i++){
	    var li = Math.floor(Math.random()* kidNames.length);
	    this.state.data.push({key: i+"",
				  amount: Math.floor(Math.random()*100)+"",
				  balance: Math.floor(Math.random()*214)+"",
				  progress: Math.floor(Math.random()*100),
				  cardId:kidNames[li]
				 });
	}
    }
    
    render(){
	
	return(
	    <View style={styles.cardContainer}>
	      <View
		
		style={{width:"97%"}}
		>
		<MainCardView
		  cardId="My QuickCard"
		  balance="25.3"
		  progress={100}
		  />
		</View>
	      
	      <FlatList
		data={this.state.data}
		renderItem={
		    ({item}) =>      {
			//let cid = "Card #"+item.key;
			return(<CardView
				     {...item}
				     />);
		    }
	 	
		}
		/>
		<ActionButton
	    buttonColor="rgba(231,76,60,1)"
	    onPress={() => { console.log("hi");}}
		/>	 
	    </View>
	);
    }

export default CardListScreen;
