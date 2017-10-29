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
  big_icon: {
    width: 75,
    height: 75,
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
    flex: 1,
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
    borderColor: 'white'
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
    height: 400
  },
  product: {
    borderWidth: 1,
    borderColor: 'red'
  }
});
