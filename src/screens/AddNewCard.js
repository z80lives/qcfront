import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {styles} from '../styles/styles';



export class AddNewCard extends Component{
    constructor(props){
	super(props);
    }

    render(){	
	return(<View style={
	    {
		flex: 1,
		justifyContent:'center',
		alignItems: 'center'
	    }
	}>
	       <Text style={styles.title1_style}>Add new card</Text>

	       <View>
	       	       <Text>IKAD</Text>
	       	    <TextInput
    		 style={styles.textField}
    		 placeholder="IKAD"
    		 returnKeyType={'done'}
    		 autoCapitalize={'none'}
    		 autoCorrect={false}
	       />
	       </View>

	       <View>
	       <Text>CardID</Text>
	       <TextInput
    		 style={styles.textField}
    		 placeholder="ID"
    		 returnKeyType={'done'}
    		 autoCapitalize={'none'}
    		 autoCorrect={false}
	       />	       
	       </View>

	       <View>
	       <Text>Name</Text>
	       <TextInput
    	       style={styles.textField}
    	       placeholder="Name"
    	       returnKeyType={'done'}
    	       autoCapitalize={'none'}
    	       autoCorrect={false}
	       />	       
	       </View>

	       
	       <TouchableOpacity
    	       onPress={
		   () => alert("Operation success!")
    		  }
    	       style={[styles.loginButton, styles.loginButtonContainer]}
	       >
	       <Text style={styles.loginTextStyle} > Confirm</Text></TouchableOpacity>



	       
	       </View>
	      );
    }
}

export default AddNewCard;
