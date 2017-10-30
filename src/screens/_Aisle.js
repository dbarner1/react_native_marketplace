import React, { Component } from 'react';
import {Text, View, StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import styles from '../stylesheets/style.js';
import Product from './_Product.js';
import productJson from '../api/products.json';

class Aisle extends Component {
  constructor() {
    super();
    this.state = {
      aisleSelected:'',
      toDisplay: '',
      urlSelected: '',
      products: [],
      fetched:'',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ urlSelected: nextProps.urlSelected });
    this.setState({ aisleSelected: nextProps.aisleSelected  });

    var product_array = [];

    for(i=0;i<productJson.length;i++) {

      var product = [
        productJson[i].name,
        productJson[i].price,
        productJson[i].image
      ]

      product_array.push(product);
    }

      this.setState({ products: product_array  });
   }

  render() {
    return(
      <View style={styles.productList}>
        <Text>{ this.state.aisleSelected }</Text>
          <ScrollView>
            {
              this.state.products.map(function(product) {
                 return(
                   <View style={styles.product} key={product}>
                     <Text>
                       {product[0]}
                     </Text>
                     <Image
                       style={{width: 80, height: 80}}
                       source={require('../images/candy.jpg')}
                     />
                     <Text>
                    ${product[1]}
                     </Text>
                     <TouchableOpacity>
                    <Text>Add to Cart</Text>
                     </TouchableOpacity>
                   </View>
                 )
               })
            }
          </ScrollView>
        </View>
    )
  }
};

module.exports = Aisle;
