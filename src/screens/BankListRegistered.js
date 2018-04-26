import React, {Component} from 'react';

import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import {
    Divider
} from 'react-native-elements';

import {Card, Button} from 'react-native-elements';


import {styles} from '../styles/styles';
import { Actions } from 'react-native-router-flux';


class BankAccount extends Component{
    constructor(props){
	super(props);
    }	
    render(){
	return(	    
		<Card>
		<View style={{flexDirection:"row"}}>
		<Image
	    style={{width: 70, height: 70, marginLeft:10, marginRight:10}}
	    source={require('../images/hlsquare.png')}
		/>
		<View>
		<Text style={{marginLeft:20, marginBottom: 4, fontSize: 18}}>MayBank</Text>
		<View style={{flexDirection:"row"}}>
		<Text style={{marginLeft:14, marginBottom: 4}}>MayBank1</Text>
		<Text style={{marginLeft:14, marginBottom: 4}}>5572600123</Text>
				
	    </View>
		<Button
		backgroundColor='#03A9F4'
		fontFamily='Lato'
		buttonStyle={[styles.defaultButton, {borderRadius: 0, marginLeft: 50, marginRight: 100, marginBottom: 0}]}
		onPress={
		    () => alert("Done")
		}	    
	    title='Set' />

	    </View>
		</View>
	    </Card>	    
	);
    }
}



export class BankListRegistered extends Component{
    constructor(props){
	super(props);
	this.state = {};
	this.state.data = [];
	for(let i=0; i< 3; i++){
	    //var rdate = randomDate(new Date(2012, 0, 1), new Date());
	    //var li = Math.floor(Math.random()*locations.length);
	    this.state.data.push({key: i+""
				 });
	}
    }

    
    
    render(){
	return(	    
		<View style={{flex:1}}>
		<View style={{flexDirection:"row", marginTop:15}}>
		
		<View stye={{flexDirection:"column"}}>
		<Text style={styles.title1_style}>Current Account</Text>		
		<Text style={styles.subtitle1_style}>HongLeong1    726557332</Text>
		</View>
		
		<Image
	    style={{width: 100, height: 100, marginLeft:50, marginRight:20}}
	    source={require('../images/hlsquare.png')}
		/> 		
		</View>		
		<Divider style={{ marginTop:13, marginBottom:13, backgroundColor: '#c43a15' }} />
		<Text style={[styles.title1_style, {fontSize:18, marginBottom:30}]}>Registered Accounts</Text>
		<FlatList
	    style={{width:"100%"}}
	    data={this.state.data}	    
	    renderItem={
		({item}) => <BankAccount />
	    }
		/>			    
				
	    </View>);
    }
    
}

/**

<View style={{flexDirection:"row", flexWrap:"wrap"}}>

	    
   	    </View>


   

   <View>
   <Image
   style={{width: 70, height: 70, marginLeft:10, marginRight:10}}
   source={require('../images/hlsquare.png')}
   />	
   <Text style={{marginLeft:14, marginBottom: 4}}>MayBank</Text>
   </View>	    
		
**/

export default BankListRegistered;
