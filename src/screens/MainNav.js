import React, {Component} from 'react';
import {
	Text,
	View,
       } from 'react-native';

import {styles} from '../styles/styles';

export class MainNav extends Component{
    render(){
	return(
	    <View style={styles.bluecontainer}>
	      <Text style={styles.defaultText}>Navigation should be here</Text>
	    </View>
	);
    }
}

