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
    Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SideBar extends React.Component {
    render() {
	return (
	    <View style={{flex:1, flexDirection:"column"}}>
	      <View style={{flex:0.3}}>
	      </View>
	      <View style={{flex:0.1}}>
		<Text style={{marginLeft:10, fontWeight:"bold", fontSize:20}}>Bank List </Text>
	      </View>
	      <View style={{flex:0.4}}>
	      </View>
	      <View style={{flex:0.2}}>
	      <Button
		title="Logout"
		onPress={Actions.login}
		/>
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
