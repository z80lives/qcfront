import {StyleSheet} from 'react-native';

export const colors = {
    tab:{
	activeColor: '#fcfefc',
	inactiveColor: '#fafbf6',
	indicatorBG: '#3f132a'
    }
};




//Not used yet
export const drawerStyles = {
  drawer: { shadowColor: '#ff0000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3}
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
    
  logoContainer:{
    justifyContent:'center'
  },

  cardContainer:{
  	flex: 1,
  	alignItems: 'center',
  	backgroundColor: '#f2f2f2'
  },

  listContainer:{
  	flex: 1,
  	alignItems: 'center',
  	backgroundColor: '#f2f2f2'
  },

  textField:{
  	width: 250,
  	height: 40,
  	borderColor: 'gray',
  	borderWidth: 1,
  	backgroundColor: 'rgba(224, 224, 224, 0.8)',
    marginBottom:10
  },


  loginButton:{
  	backgroundColor: '#f53b57',
  	borderWidth: 2,
  	borderColor: '#f93b57',
  	borderRadius: 30,
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#621722',
    shadowOpacity: 1.0,
    elevation: 10
  },

    reportButton:{
  	backgroundColor: '#f53b57',
  	borderWidth: 2,
  	borderColor: '#f93b57',
  	borderRadius: 30,
	shadowOffset: {width: 10, height: 10},
	shadowColor: '#621722',
	shadowOpacity: 1.0,
	elevation: 10
  },

  reportButtonContainer: {
  	marginVertical: 10,
  	height: 50,
  	width: 250,
  	justifyContent: 'center',
  	alignItems: 'center'
  },

    subtitleView:{
	flexDirection: 'row',
	paddingLeft: 10,
	paddingTop: 5
    },

  flatListItem:{
      width: "90%",
      backgroundColor: "#cecbca"
  },

  loginButtonContainer: {
  	marginVertical: 10,
  	height: 50,
  	width: 250,
  	justifyContent: 'center',
  	alignItems: 'center'
  },

  loginTextStyle: {
  	color: 'white',
  	textAlign: 'center',
  	color: '#ffffff',
  	fontWeight: 'bold'
  },

  defaultButton:{
  	alignItems: 'center',
  	backgroundColor: '#f53b57',
  	paddingLeft: 30,
  	paddingRight: 30,
  	paddingTop: 10,
  	paddingBottom: 10
  },

  defaultText:{
  	margin: 3,
  	color: '#fecefe'
  },

  bluecontainer:{
  	flex: 1,
  	backgroundColor: '#ffff',
  	justifyContent: 'center',
  	alignItems: 'center',
  	flexDirection: 'column'
  },


  tabBarLabel:{
    fontFamily: 'rubik',
    fontWeight: '600'
	},

  tabBarStyle: {
    //	color: "#3f23f3",
    borderTopWidth : .2,
    borderColor    : '#b7b7b7',
    backgroundColor: '#3f433a',
    opacity        : 1,

    marginBottom: 1,
    flexWrap: 'nowrap',
    //flexDirection:'row',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1
  },

    navBarStyle:{
	backgroundColor: '#ff433a',
	borderBottomWidth:0,
	elevation: 1
    },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },

  history_item: {
    flex:2,
    flexDirection:"column",
    backgroundColor: 'white',
    margin: 4,
    padding: 15,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {width: 0,height: 4}
  },

  history_amount:{
    alignSelf: 'flex-end'
  },

  card_item_details:{
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 20,
    shadowOffset: {width: 0,height: 4}
  },

  details_text:{
    paddingBottom: 4
  },

  card_item_details_btn:{

  },

    text_label:{
        fontWeight:"bold",
        fontSize: 16
    },

    title1_style:{
	marginLeft: 25,
	marginRight: 10,
	marginTop:20,
        fontSize: 20,
	fontWeight:"bold"
    },

    subtitle1_style:{
	marginLeft: 25,
	marginRight: 10,
	marginTop:20,
        fontSize: 13
    }


});

