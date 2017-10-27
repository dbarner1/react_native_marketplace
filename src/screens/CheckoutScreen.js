import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import styles from '../stylesheets/style.js';

class CheckoutScreen extends Component {
  render() {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Your checkout is here</Text>
        </View>
    )
  }
};

module.exports = CheckoutScreen;
