import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Text, View, StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import styles from '../stylesheets/style.js';
import Product from './Product.js';

import { NavigationActions } from 'react-navigation';

const Aisle = ({ aisleSelected, productsAvailable, dispatch }) => {
    return(
      <View style={styles.productList}>
        <Text>{ aisleSelected }</Text>
        <View>
          { productsAvailable }
        </View>
        </View>
    )
  };

  const mapStateToProps = state => ({
    aisleSelected: state.aisleSelected.aisleSelected,
    productsAvailable: state.aisleSelected.productsAvailable,
  });

  export default connect(mapStateToProps)(Aisle);
