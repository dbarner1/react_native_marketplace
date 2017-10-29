import React, { Component } from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';
import styles from '../stylesheets/style.js';

class CheckoutScreen extends Component {
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
