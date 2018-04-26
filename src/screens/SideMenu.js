import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground } from "react-native";

/*import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon
} from "native-base";*/

import {
    View,
    Button,
    Text,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/styles';


export default class SideBar extends React.Component {
    render() {
	return (
	    <View style={{flex:1, flexDirection:"column"}}>

	          <Image
                        source={require('../images/profile.png')}
                    style={{
			marginTop:3,			
                        height: 200,
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
		    resizeMode="stretch"
                    />
		  
		  <TouchableOpacity
		    style={styles.navButton}
		    onPress={Actions.bankList}
		    >
		    <View style={{flexDirection:"row"}}>
	              <Image
			source={require('../images/hlsquare.png')}
			style={{
                            height: 32,
			    width:32
			}}
			resizeMode="stretch"
			/>
		      <Text style={{marginLeft:4, fontWeight:"bold", fontSize:20}}>HongLeong1</Text>
		    </View>
		  </TouchableOpacity>
		  
		<TouchableOpacity style={styles.navButton}>
		  <View style={{flexDirection:"row"}}>
	            <Text style={{marginLeft:4, fontWeight:"bold", fontSize:20}}>Settings</Text>
		  </View>
		</TouchableOpacity>
		 		  

	      <View style={{flex:0.3}}>
	      </View>
	      
	      <View style={{flex:0.1}}>		
	      </View>
	      
	      <View style={{flex:0.2}}>
	      </View>	      
	      <View style={{flex:0.4}}>
 		
		<TouchableOpacity style={styles.navButton}>
		  <View style={{flexDirection:"row"}}>
	            <Text style={{marginLeft:4, fontWeight:"bold", fontSize:20}}>T&C</Text>
		  </View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.navButton}
				  onPress={Actions.login}
				  >
		  <View style={{flexDirection:"row"}}>
	            <Text style={{marginLeft:10, fontWeight:"bold", fontSize:20}}>Logout</Text>
		  </View>
		</TouchableOpacity>		
	      </View>
	    </View>
	    
	);
	
	/*

	  //old code
        return (
            <Container>
                <Content> 
                    <ImageBackground
                        source={require('../images/logo.png')}
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <ImageBackground
                            square
                            style={{ height: 80, width: 70 }}
                            source={require('../images/logo.png')}
                          />
                    </ImageBackground>
		    <Button title="Logout"
			    onPress={()=>{}}/>
                </Content>
            </Container>
        );*/
    }
}
