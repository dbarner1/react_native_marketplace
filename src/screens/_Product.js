import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import styles from '../stylesheets/style.js';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product_name: '',
      product_description: '',
      product_image: '',
      product_price: ''
    };
  }

  componentWillReceiveProps(nextProps) {
      this.setState({ product_name: nextProps.name });
      this.setState({ product_description: nextProps.description  });
      this.setState({ product_image: nextProps.image });
      this.setState({ product_price: nextProps.price  });
  }

  render() {
    return(
        <View >
          <Text>{this.state.product_name}</Text>
        </View>
    )
  }
};

module.exports = Product;
