import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addProduct } from '../actions';
import styles from '../stylesheets/style.js';

let MarketApp = ({products, dispatch, text}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Items in your basket</Text>
      <Text>{products}</Text>
      <View>
        <TouchableOpacity onPress={e => {dispatch(addProduct('From the container'))}} style={styles.button}>
          <Text>Add Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


MarketApp = connect()(MarketApp)

export default MarketApp
