import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Image, TouchableOpacity, Alert, StyleSheet, Text, View } from 'react-native';
import styles from '../stylesheets/style.js';
import thunk from 'redux-thunk';

const CheckoutScreen = ({ cart, dispatch, navigation }) => (
  <View style={ styles.CheckoutScreen }>
  <Image
    source={require('../images/logo.png')}
    style={styles.extraLG_icon} />
  <View style={styles.CartView}>
     <View style={styles.CartTitles}>
        <Text>Product Name</Text>
        <Text>     </Text>
        <Text>Price</Text>
      </View>
    {
      cart.map(function(product) {
        return(
          <View style={styles.CartItem} key={product[0]}>
            <Text style={styles.CartText}>{product[1]}</Text>
            <Text>     </Text>
            <Text style={styles.CartText}>${product[2]}</Text>
          </View>
        )
      })
    }
    <View style={styles.CartTitles}>
       <Text>     </Text>
       <Text>     </Text>
       <Text>Total</Text>
       <Text>          </Text>
       <Text>$50</Text>
     </View>
  </View>
    <TouchableOpacity>
    <Button
      onPress={() =>
        Alert.alert("Bummer!","Unfortunately our store is closed and cannot accept orders at this time.")}
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

const mapStateToProps = state => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(CheckoutScreen);
