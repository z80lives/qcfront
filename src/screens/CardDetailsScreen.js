import React, {Component} from 'react';

import {
    View,
    Text,
    Switch,
    Button,
    TouchableOpacity
} from 'react-native';
import {Card,
	Divider
       } from 'react-native-elements';

import {styles} from '../styles/styles';
import * as Progress from 'react-native-progress';

//import { Actions } from 'react-native-router-flux';


export class CardDetailsScreen extends Component{

    constructor(props){
	super(props);
	this.state = {
	    cardId: "123-124-3123",
	    SN: "1234-2133-3123",
	    balance: "12.30",
	    active: true,
	    blockrequest: false
	};

    }

    render(){
	return(
	    <View style={{height: "90%"}}>
              <Card title="MyCard" style={styles.card_item_details}
		    containerStyle={{
			elevation: 10, shadowColor: '#cccccc',
			shadowRadius: 10,
			shadowOpacity: 0.6,
			elevation: 15,
			flex:1,
			flexDirection: 'row',
			justifyContent: 'center',
		    shadowOffset: {width: 0,height: 4}}}>
		
		<View style={{flex:1, marginTop:"20%"}}>		 
		  <View style={{flexDirection:"column"}}>
    		    <Text style={styles.details_text}>
		      <Text style={{fontWeight:"bold", fontSize: 16}}>ID: </Text> {this.state.cardId}
		    </Text>		    
		    
		    <View style={{flexDirection:"column"}}>
		      <Divider style={{ marginTop:3, marginBottom:3, backgroundColor: '#ffeeee' }} />		      
		    </View>

		    <View style={{flexDirection:"column"}}>
		      <Divider style={{ marginTop:3, marginBottom:3, backgroundColor: '#ffeeee' }} />		      
		      <Text style={styles.text_label}>Limit Usage:</Text>
		      <View style={{padding:10}}>
			<Progress.Bar progress={0.3}  />
		      </View>

		    	    		   
    		    <Text style={styles.details_text}>
		      <Text style={{fontWeight:"bold", fontSize: 16}}>Activation </Text>
		    </Text>

		    <View style={{flexDirection:"column"}}>
  		    <View style={{flexDirection:"row"}}>
		      <View>
			<Text>Normal Use</Text>
		      </View>
		      <View >
			<Switch
      			  onPress={()=>this.state.active=!this.state.active}
      			  value={this.state.active}
			  />
		      </View>		      
		    </View>
		    
		    <View style={{flexDirection:"row"}}>
		      <View>
			<Text>Online</Text>
		      </View>
		      <View>
			<Switch
      			  onPress={()=>this.state.active=!this.state.active}
      			  value={this.state.active}
			  />
		      </View>
		    </View>

		    <View style={{flexDirection:"row"}}>
		      <View>
			<Text>Overseas</Text>
		      </View>
		      <View>
			<Switch
      			  onPress={()=>this.state.active=!this.state.active}
      			  value={this.state.active}
			  />
		      </View>
		    </View>



		    </View>
		      <Divider style={{ marginTop:3, marginBottom:3, backgroundColor: '#ffeeee' }} />		      

		    
		    

		    



		    
		      <Divider style={{ marginTop:3, marginBottom:3, backgroundColor: '#ffeeee' }} />		      
		    </View>

		    	
		  </View>

		  
		</View>

		<View>

		  
      		  <TouchableOpacity
		    style={[{backgroundColor: "#ff0000"}]}
		    raised
      		    onPress={()=>{alert("Thank you for reporting.");}}
      		    title="Report stolen"
      		    />
		</View>
	      </Card>
	    </View>
	);
    }
}


export default CardDetailsScreen;
