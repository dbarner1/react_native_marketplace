import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

module.exports = StyleSheet.create({
  header: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  icon: {
    width: 26,
    height: 26,
  },
  productList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 300
  },
  CartItem: {
    display: 'flex',
    flexDirection: 'row'
  },
  CartTitles: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: 10,
    marginTop: 10,
  },
  productHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding:20,
    backgroundColor: 'grey',
    width: 300
  },
  CartView: {
    backgroundColor: 'white',
    minHeight: 100,
    minWidth: 300,
    padding: 30,
    marginBottom:30
  },
  CartText: {
    color: 'black'
  },
  CheckoutScreen: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#2196F3'
  },

  addToCartButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    height: 50,
    width: 200,
    margin: 10,
  },
  productImage: {
    width: 20,
    height: 20
  },
  big_icon: {
    width: 75,
    height: 75,
  },
  button: {
    color: 'white',
    fontSize: 20
  },
  extraLG_icon: {
    width: 200,
    height: 200,
  },
  home: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#2196F3'
  },
  homeButton: {
    color: 'white'
  },
  allAislesScroll: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'scroll',
    marginTop:0,
    height: 100
  },
  aisleScreen: {
    display: 'flex',
    alignItems: 'center',
  },
  ScreenHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)',
    width: '100%',
    paddingTop:30
  },
  aisleSelectImage: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'white',
    borderTopWidth: 0
  },
  aisleScrollTitle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,.2)',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  currentAisle: {
    paddingTop: 20,
    height: 500
  },
  product: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    width: 300,
    borderColor: 'grey',
    alignItems: 'center'
  }
});
