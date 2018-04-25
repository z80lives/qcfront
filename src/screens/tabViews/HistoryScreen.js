import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList
       } from 'react-native';

import {styles} from '../../styles/styles';

import CardView from '../../components/TransactionRecordItem.js';

import {ListItem, List} from 'react-native-elements';



const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },

];



export class HistoryScreen extends Component{
    constructor(props){
	super(props);
	this.state ={
	};
	this.state.data = [];
	for(let i=0; i< 30; i++){
	    this.state.data.push({key: i+"", amount: Math.floor(Math.random()*100)+""});
	}
    }
    render(){
	return(
	    <View style={styles.listContainer}>
	      <FlatList
      		style={{width:"100%"}}
      		data={this.state.data}
      		renderItem={
    		    ({item}) => <CardView
    				              amount={item.amount}
			                  />

		      }
		    />
	    </View>
	);
    }
/*    render(){
	return(
	    <List containerStyle={{marginBottom: 20}}>
	      {
		  list.map((l, i) => (
		      <ListItem
			key={i}
			title={l.name}
			/>
		  ))
	      }
	    </List>
	);
    }*/
}

export default HistoryScreen;
