import React, { Component } from 'react';
import {
    //Platform,
    View
} from 'react-native';

import {LoginScreen} from './src/screens/LoginScreen';
import { Router, Scene, ActionConst, Tabs } from 'react-native-router-flux';
//import {MainNav} from './src/screens/MainNav';

//import NavigationDrawer from './src/screens/NavDrawer';

import CardScreen from './src/screens/tabViews/CardScreen';
import HistoryScreen from './src/screens/tabViews/HistoryScreen';
import {styles, colors} from './src/styles/styles';

import TabIcon from './src/components/TabIcon';

export default class App extends Component {
    render() {
	return(
	    <Router>

	      <Scene
		key="root"
		hideNavBar={true}
		>

		<Scene key="login" component={LoginScreen} title="Login" initial={true}
		       />


  		<Tabs

  		  key="main"
                    iconName="ios-add-circle"
                    icon={TabIcon}
                    activeTintColor={colors.tab.activeColor}
                    inactiveTintColor={colors.tab.inactiveColor}
                    tabBarPosition="top"
                    swipeEnabled
                    showLabel
                    labelStyle={styles.tabBarLabel}
                    tabBarStyle={styles.tabBarStyle}
  		  upperCaseLabel={false}
                    indicatorStyle={{ backgroundColor: '#3f132a', height: 4 }}>

  		  <Scene key="tabCards" title="My Cards" component={CardScreen} initial={true}
  			 hideNavBar={true}
  			 tabBarLabel="Home"
  			 />
  		  <Scene key="tabHistory" title="History" component={HistoryScreen} 		       hideNavBar={true}
  			 tabBarLabel="History"
  			 />

		</Tabs>
		</Scene>
	    </Router>
	);

    }
}
