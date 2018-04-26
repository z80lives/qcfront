import React, {Component} from 'react';
import {View, Image} from 'react-native';


export default class DrawerIcon extends Component {
    render(){
        return (
	    <View>
	      <Image
		style={{width: 24, height: 24}}
		source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
		/>
	    </View>
        );
    }
    
}


