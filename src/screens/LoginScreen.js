import React, {Component} from 'react';
//import
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';


import {styles} from '../styles/styles';
import { Actions } from 'react-native-router-flux';

export class LoginScreen extends Component{
    render(){
/*	return (
	    <View style={styles.bluecontainer}>

	      <Button
		buttonStyle={styles.loginButton}
		titleStyle={{fontWeight: 'bold'}}
		title="Login"
		/>
	    </View>
	);*/
	return (
	    <View style={styles.bluecontainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../images/logo.png')} />
      </View >
	       <TextInput
		 style={styles.textField}
		 placeholder="IKAD"
		 returnKeyType={'done'}
		 autoCapitalize={'none'}
		 autoCorrect={false}
		 />

	       <TextInput
		 style={[styles.textField, {marginTop: 10}]}
		 secureTextEntry={true}
		 placeholder="Password"
		 returnKeyType={'done'}
		 autoCapitalize={'none'}
		 autoCorrect={false}
		 />

			<TouchableOpacity
		  onPress={
			 Actions.main
		  }
		  style={[styles.loginButton, styles.loginButtonContainer]}

		  ><Text style={styles.loginTextStyle} > Login</Text></TouchableOpacity>
		</View>
	);
    }
}

export default LoginScreen;
