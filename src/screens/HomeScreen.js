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
