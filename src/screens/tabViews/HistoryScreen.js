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

/**
*	    date:"21-04-2018",
	    time: "12:54:12",
	    amount: "20.30",
	    location: "Guardian NU Sentral" 
**/

var locations = [
    "MRT Semantan",
    "McDonalds",
    "Guardian NU Sentral"    
];

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random()
		    * (end.getTime() - start.getTime()));
}


export class HistoryScreen extends Component{
    constructor(props){
	super(props);
	this.state ={
	};
	this.state.data = [];
	for(let i=0; i< 30; i++){
	    var rdate = randomDate(new Date(2012, 0, 1), new Date());
	    var li = Math.floor(Math.random()*locations.length);
	    this.state.data.push({key: i+"",
				  amount: Math.floor(Math.random()*100)+"",
				  date: rdate.toLocaleDateString(),
				  time: rdate.toLocaleTimeString(),
				  location: locations[li]
				 });
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
				      {...item}
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
