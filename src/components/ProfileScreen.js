import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../stylesheets/style.js';


const CheckoutScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Profile Screen
    </Text>
  </View>
);

CheckoutScreen.navigationOptions = {
  title: 'Checkout',
};

export default CheckoutScreen;
