import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Text, View, StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import styles from '../stylesheets/style.js';
import Product from './Product.js';
import { NavigationActions } from 'react-navigation';
import ButtonAddCart from './ButtonAddCart';

const Aisle = ({ productsAvailable, dispatch }) => {
    return(
      <ScrollView>
        <View style={styles.productList}>
            {
              productsAvailable.map(function(i) {
                 return(
                   <View style={styles.product} key={i}>
                     <Text>
                       {i[0]}
                     </Text>
                     <Text>
                       ${i[1]}
                     </Text>
                     <Image
                       source={ {uri: i[2]} }
                       style={styles.aisleSelectImage} />
                    <ButtonAddCart />
                   </View>
                 )
               })
            }
          </View>
        </ScrollView>
    )
  };

  const mapStateToProps = state => ({
    productsAvailable: state.productsAvailable.productsAvailable,
  });

  export default connect(mapStateToProps)(Aisle);
