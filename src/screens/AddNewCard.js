import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

//import {styles} from '../../styles/styles';


export class AddNewCard extends Component{
    constructor(props){
	super(props);
    }

    render(){
	return(<View>
	       <Text>Add new card</Text>
	       </View>
	      );
    }
}

export default AddNewCard;
