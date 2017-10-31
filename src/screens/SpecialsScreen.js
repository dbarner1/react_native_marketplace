import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import styles from '../stylesheets/style.js';

const SpecialsScreen = ({ navigation }) => (
  <View style={ styles.home }>
  <Image
    source={require('../images/logo.png')}
    style={styles.extraLG_icon} />
    <TouchableOpacity>
    <Button
      onPress={() => navigation.dispatch({ type: 'Start Shopping' })}
      title="Start Shopping"
      color='white'
    />
    </TouchableOpacity>
  </View>
);

SpecialsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SpecialsScreen.navigationOptions = {
  title: 'Specials',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../images/home.jpg')}
      style={[styles.icon]} />
  ),
};

export default SpecialsScreen;
