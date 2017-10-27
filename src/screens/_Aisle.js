import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import styles from '../stylesheets/style.js';

class Aisle extends Component {
  constructor() {
    super();
    this.state = {
      aisleSelected:'',
      toDisplay: '',
      urlSelected: 'https://barner-marketplace-api.herokuapp.com/products'
    };
  }

  componentWillReceiveProps(nextProps) {
      this.setState({ urlSelected: nextProps.urlSelected });
      this.setState({ aisleSelected: nextProps.aisleSelected  });
      var url = this.state.urlSelected;
  }


  render() {
    return(
        <View style={{ }}>
          <Text>{ this.state.aisleSelected }</Text>
        </View>
    )
  }
};

module.exports = Aisle;
