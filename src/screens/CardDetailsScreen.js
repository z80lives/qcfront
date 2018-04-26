import React, {Component} from 'react';
import { SegmentedControls } from 'react-native-radio-buttons';

import {
    View,
    Text,
    Switch,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import {Card,
	Divider,
	Slider
       } from 'react-native-elements';

import {styles} from '../styles/styles';
//import * as Progress from 'react-native-progress';

import { Actions } from 'react-native-router-flux';


export class CardDetailsScreen extends Component{
    
    constructor(props){
	super(props);
	
	if(props.limit == null){
	    props = {};
	    props.limit = 500;
	    props.username = "QuickCard";
	}
	
	this.state = {
	    name: props.username,
	    cardId: "123-124-3123",
	    SN: "1234-2133-3123",
	    balance: "12.30",
	    online: false,
	    overseas: false,
	    limit: props.limit,
	    monthlyLimit: 100,
	    weeklyLimit: 200,
	    dailyLimit: 50,
	    active: true,
	    blockrequest: false,
	    selectedOption: "Daily"
	};	
    }    

    
    render(){

	
	//For radio button
	const options = [
	    "Daily",
	    "Weekly",
	    "Monthly"
	];	
	//For radio buttons
	function setSelectedOption(selectedOption){
	    this.setState({
		selectedOption
	    });
	}
	
	return(
	    <View style={{height: "98%"}}>
	      <Card title={this.state.name} style={styles.card_item_details}
		    containerStyle={{
			elevation: 10, shadowColor: '#cccccc',
			shadowRadius: 10,
			shadowOpacity: 0.6,
			elevation: 15,
			flex:1,
			flexDirection: 'row',
			justifyContent: 'center',
		    shadowOffset: {width: 0,height: 4}}}>
		
		<View style={{flex:1, marginTop:5}}>		 
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

		      <View style={{padding:10, width: 250}}>
			<Text>RM{this.state.limit}</Text>
			<SegmentedControls
			  options={ options }
			  onSelection={ setSelectedOption.bind(this) }
			  selectedOption={ this.state.selectedOption }
			  />
			<Slider
  			  step={10.0}
			  minimumValue={10.0}
			  maximumValue={5000.0}
			  value={this.state.limit}
			  onValueChange={(value) => {var v = Number(value.toFixed(2)); this.setState({limit: v});} } />
		      </View>
		      
		      
    		      <Text style={styles.details_text}>
			<Text style={{fontWeight:"bold", fontSize: 16}}>Activation </Text>
		      </Text>

		      
		      <View style={{flexDirection:"column"}}>
  			<View style={{flexDirection:"row"}}>
			  <View  style={styles.activationLabel}>
			    <Text>Normal Use</Text>
			  </View>
			  <View >			    
			    <Switch			      
      			      onValueChange={(v)=> this.setState({active:v}) }
			      value={this.state.active}
			      />
			  </View>		      
			</View>

			<View style={{flexDirection:"row"}}>
			  <View style={styles.activationLabel}>
			    <Text>Online</Text>
			  </View>
			  <View>
			    <Switch
			      onValueChange={(v)=> this.setState({online:v}) }
      			      value={this.state.online}
			      />
			  </View>
			</View>

			<View style={{flexDirection:"row"}}>
			  <View  style={styles.activationLabel}>
			    <Text>Overseas</Text>
			  </View>
			  <View>
			    <Switch
			      onValueChange={(v)=> this.setState({overseas:v}) }
      			      value={this.state.overseas}
			      />
			  </View>
			</View>



		      </View>
		      <Divider style={{ marginTop:3, marginBottom:3, backgroundColor: '#ffeeee' }} />		      
		      

		    </View>

		    
		  </View>
		  
		  <View style={{height:"20%"}}>
		    <Button
		      fontFamily='Lato'
		      buttonStyle={[styles.defaultButton, {borderRadius: 0, marginLeft: 100, marginRight: 0, marginBottom: 0, backgroundColor:"#FFA900"}]}
		      onPress={
			  ()=>Actions.viewHistory({username: this.state.name})
		      }
		      title='View History' />
		  </View>		  		  
		</View>
		
		
		<View style={{height:"10%"}}>
		  <Button
		    fontFamily='Lato'
		    buttonStyle={[styles.defaultButton, {borderRadius: 0, marginLeft: 100, marginRight: 0, marginBottom: 0, backgroundColor:"#FFA900"}]}
		    onPress={
			() => {
			    alert("Thank you for reportin");
			}
		    }
		    title='Report Stolen' />
		</View>
		
	      </Card>
	    </View>
	);
    }
}


export default CardDetailsScreen;
