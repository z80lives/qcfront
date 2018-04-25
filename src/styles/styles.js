import {StyleSheet} from 'react-native';

export const colors = {
    tab:{
	activeColor: '#fc9e4b',
	inactiveColor: '#eaab46'
    }
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logoContainer:{
    justifyContent:'center',
  },

    cardContainer:{
    	flex: 1,
    	alignItems: 'center',
    	backgroundColor: '#F5FCFE'
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
	backgroundColor: '#e0e0e0'
    },


    loginButton:{
	backgroundColor: '#f53b57',
	borderWidth: 2,
	borderColor: 'white',
	borderRadius: 30,
  shadowOffset: {width: 10, height: 10},
  shadowColor: '#621722',
  shadowOpacity: 1.0
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
	backgroundColor: '#feaece',
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

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },

  history_item: {
    flex:1,
    flexDirection:"column",
    backgroundColor: 'white',
    margin: 4,
    padding: 15
  },
  history_amount:{
    alignSelf: 'flex-end'
  }
});
