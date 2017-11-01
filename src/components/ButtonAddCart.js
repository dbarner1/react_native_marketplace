import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Text, View, StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import styles from '../stylesheets/style.js';
import Product from './Product.js';
import { NavigationActions } from 'react-navigation';

const ButtonAddCart = ({ cart, dispatch }) => {
    return(
      <TouchableOpacity onPress={() => dispatch(cart: 'Add to Cart')} style={styles.addToCartButton}>
       <Text>
         Add to Cart!
       </Text>
     </TouchableOpacity>
    )
  };

  const mapStateToProps = state => ({
    cart: state.cart.cart,
  });

  export default connect(mapStateToProps)(ButtonAddCart);
