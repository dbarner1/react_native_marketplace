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
    marginTop:70,
    height: 100
  },
  aisleSelectImage: {
    width: 120,
    height: 120,
  },
  aisleScrollTitle: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
  currentAisle: {
    height: 400
  },
  aisleSelectDiv: {

  }
});
