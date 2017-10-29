import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import styles from '../stylesheets/style.js';
import Product from './_Product.js';

class Aisle extends Component {
  constructor() {
    super();
    this.state = {
      aisleSelected:'',
      toDisplay: '',
      urlSelected: '',
      products: ['peanut'],
      fetched:'',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ urlSelected: nextProps.urlSelected });
    this.setState({ aisleSelected: nextProps.aisleSelected  });

    fetch('https://barner-marketplace-api.herokuapp.com/products')
      .then(function(response) {return response.json();})
      .then(function(json) {

        json.forEach(function(product) {
          var products_array = this.state.products;
          products_array.push('pizza');
          this.setState(products: products_array);
        })
      })
   }

  render() {
    return(
        <View >
          <Text>{ this.state.aisleSelected }</Text>
          <Text>{this.state.urlSelected}</Text>
          {
            this.state.products.map(function(key, i) {
               return(
                 <View style={styles.product} key={i}>
                   <Text>
                     {key}
                   </Text>
                 </View>
               )
             })
          }
        </View>
    )
  }
};

module.exports = Aisle;
