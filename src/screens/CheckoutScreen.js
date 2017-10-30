import React, { Component } from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';
import styles from '../stylesheets/style.js';

class CheckoutScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Checkout',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/cart.png')}
        style={[styles.icon]} />
    ),
  };
  render() {
    return(
        <View style={styles.ScreenHeader}>
        <Image
          source={require('../images/logo.png')}
          style={[styles.big_icon]} />
          <Text>Your checkout is here</Text>
        </View>
    )
  }
};

module.exports = CheckoutScreen;
