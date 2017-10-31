import React, { Component } from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';
import styles from '../stylesheets/style.js';

class HelpScreen extends Component {
  render() {
    return(
        <View style={styles.ScreenHeader}>
        <Image
          source={require('../images/logo.png')}
          style={[styles.big_icon]} />
          <Text>Your help is here</Text>
        </View>
    )
  }
};

module.exports = HelpScreen;
