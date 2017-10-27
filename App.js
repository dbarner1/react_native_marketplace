import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import AislesScreen from './src/screens/AislesScreen.js';
import HelpScreen from './src/screens/HelpScreen.js';
import CheckoutScreen from './src/screens/CheckoutScreen.js';

import styles from './src/stylesheets/style.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./src/images/home.jpg')}
        style={[styles.icon]}
      />
    ),
  };

  render() {
    return (
      <View style={ styles.home }>
        <Button color='white' title="Start Shopping" onPress={() => this.props.navigation.navigate('Aisles')} />
      </View>
    );
  }
}

const RootNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Aisles: {
    screen: AislesScreen,
    navigationOptions: {
      headerTitle: 'Aisles',
    },
  },
  Help: {
    screen: HelpScreen,
    navigationOptions: {
      headerTitle: 'Help',
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
    tabBarOptions: {
      activeTintColor: '#e91e63',
    }
   },
);

export default RootNavigator;