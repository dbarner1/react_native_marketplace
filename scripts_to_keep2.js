{
  this.state.products.map(function(key, i) {
     return(
       <View style={styles.product} key={i}>
         <Text>
           {key}
         </Text>
       </View>
     )
   })
}

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { addNavigationHelpers } from 'react-navigation';
import combineReducers from 'redux';
import styles from './src/stylesheets/style.js';
import AislesScreen from './src/screens/AislesScreen.js';
import HelpScreen from './src/screens/HelpScreen.js';
import CheckoutScreen from './src/screens/CheckoutScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';


const AppNavigator = StackNavigator({
  Home: { screen: MyTabNavigator }
});

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = 0, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const appReducer = combineReducers({
  nav: navReducer,
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);
const store = createStore(appReducer);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}




----

import React, { Component } from 'react';
import {Text, View, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../stylesheets/style.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/home.jpg')}
        style={[styles.icon]} />
    ),
  };

  render() {
    return (
      <View style={ styles.home }>
      <Image
        source={require('../images/logo.png')}
        style={styles.extraLG_icon} />
        <TouchableOpacity>
          <Button
            color='white'
            title="Start Shopping"
            onPress={() => this.props.navigation.navigate('Aisles')}
          />
        </TouchableOpacity>
      </View>
      );

  }
}

module.exports = HomeScreen;




----


import React from 'react';
import { TabNavigator } from 'react-navigation';
import styles from './src/stylesheets/style.js';
import AislesScreen from './src/screens/AislesScreen.js';
import HelpScreen from './src/screens/HelpScreen.js';
import CheckoutScreen from './src/screens/CheckoutScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';

const RootNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Aisle: {
    screen: AislesScreen,
    navigationOptions: {
      headerTitle: 'Aisle',
    },
  },
  Checkout: {
    screen: CheckoutScreen,
    navigationOptions: {
      headerTitle: 'Checkout',
    },
   }
},{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    showIcon: true,
    initialRouteName: 'Aisle',
    tabBarOptions: {
      activeBackgroundColor: 'rgba(255,255,255,1)',
      inactiveBackgroundColor: 'rgba(0,0,0,.0000002)',
      activeTintColor: 'red',
    }
   },
);

export default RootNavigator;
