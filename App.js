import React, { Component } from 'react';
import {
    //Platform,
    Button,
    View,
    Text,
    StatusBar
} from 'react-native';

import {LoginScreen} from './src/screens/LoginScreen';
import { Router, Scene, Stack, Tabs, Drawer } from 'react-native-router-flux';


//import {MainNav} from './src/screens/MainNav';
//import NavigationDrawer from './src/screens/NavDrawer';
import SideMenu from './src/screens/SideMenu';
//import {NavBarCustom} from './src/screens/NavBarCustom';


import CardScreen from './src/screens/tabViews/CardScreen';
import CardDetailsScreen from './src/screens/CardDetailsScreen';
import HistoryScreen from './src/screens/tabViews/HistoryScreen';
import {styles, colors} from './src/styles/styles';


import {AddNewCard} from './src/screens/AddNewCard';

import {BankListRegistered} from './src/screens/BankListRegistered';

import TabIcon from './src/components/TabIcon';

//import MenuIcon from './src/images/drawer.png';
//import MenuIcon from './src/components/DrawerIcon';

//import SideMenu from 'react-native-side-menu';
//import Sidebar from 'react-native-sidebar';
//import {Menu} from './src/Menu';
//import Drawer from 'react-native-drawer'


export default class App extends Component {

    	
    render() {
	return(
	    <Router
	      hideNavBar={true}
	      title="QuickCard"
	      
	      >

	      <Scene
		key="root"	

		
		contentComponent={SideMenu}
		initial		
		drawerPosition="left"
		drawerWidth={200}
		drawerLabel="Drawer"
		//drawerImage={MenuIcon}  //bug causing the image to be displayed incorrectly
		drawer		
		//navBarS
		>

		<Scene key="login" component={LoginScreen} title="Login"
		       hideTabBar
		       hideNavBar={true}
		       />

		<Stack key="home"
		       initial={true}

		       >
  		<Scene		
  		  key="main"
                  iconName="ios-add-circle"
                  icon={TabIcon}
                  activeTintColor={colors.tab.activeColor}
                  inactiveTintColor={colors.tab.inactiveColor}
                  tabBarPosition="top"
		  
                  swipeEnabled
                  showLabel={true}
                  labelStyle={styles.tabBarLabel}
                  tabBarStyle={styles.tabBarStyle}
		  upperCaseLabel={true}
                  indicatorStyle={{ backgroundColor: colors.tab.indicatorBG, height: 4 }}
		  tabs={true}
		  hideTabBar={false}

		  activeBackgroundColor="red"
		  inactiveBackgroundColor="white"
		  hideNavBar={false}
		  title="QuickCard"		  
		  wrap={false}
		  navigationBarStyle={styles.navBarStyle}
		  titleStyle={{ color: 'white', alignSelf: 'center' }}		  
		  >
		    
		    <Scene key="tabCards"  component={CardScreen} initial={true}
			   tabBarLabel="Home"
			   title="Home"			   
			   
			   />
		    <Scene key="tabHistory"  component={HistoryScreen} 		
			   tabBarLabel="History"
			   title="History"
			   />
		    
		  </Scene>
		  
		<Scene key="cardDetails" title="Card Details" component={CardDetailsScreen}		
		       />

		<Scene key="addNewCard" title="AddCard" component={AddNewCard}
		       />
	  	<Scene key="bankList" title="Choose Account" component={BankListRegistered}		       
		       initial={true}
		       />
		
	  	
		</Stack>
		</Scene>
	    </Router>
	);

    }
}
