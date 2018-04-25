import React, {Component} from 'react';
import {
    View,
    FlatList,
       } from 'react-native';

import {styles} from '../../styles/styles';

import CardView from '../../components/QuickCardSummary.js';

export class CardListScreen extends Component{
    constructor(props){
	super(props);
	this.state ={	    
	};
	this.state.data = [];
	for(let i=0; i< 3; i++){
	    this.state.data.push({key: i+"", amount: Math.floor(Math.random()*100)+""});
	}
    }

    
    render(){
	
	return(
	    <View flex="1" style={styles.cardContainer}>
	      <FlatList
		data={this.state.data}
		renderItem={
		    ({item}) =>      {
			let cid = "Card #"+item.key;
			return(<CardView
				     cardId ={cid}
				     balance={item.amount}
				     />);
		    }
	 	
		}
		/>
	 
	    </View>
	);
    }
}

export default CardListScreen;
