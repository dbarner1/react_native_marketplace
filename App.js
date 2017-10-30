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
