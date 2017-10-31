import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import styles from '../stylesheets/style.js';

const CheckoutScreen = ({ navigation }) => (
  <View style={ styles.home }>
  <Image
    source={require('../images/logo.png')}
    style={styles.extraLG_icon} />
    <TouchableOpacity>
    <Button
      onPress={() => navigation.dispatch({ type: 'Submit Order (Action Not Setup Yet)' })}
      title="Submit Order"
      color='white'
    />
    </TouchableOpacity>
  </View>
);

CheckoutScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

CheckoutScreen.navigationOptions = {
  title: 'Checkout',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../images/cart.png')}
      style={[styles.icon]} />
  ),
};

export default CheckoutScreen;
