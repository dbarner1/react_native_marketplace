import React, { Component } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, ScrollView, TouchableHighlight, View } from 'react-native';
import styles from '../stylesheets/style.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import thunk from 'redux-thunk';
import Aisle from '../components/Aisle';

const BrowseScreen = ({ navigation, aisles, aisleSelected, dispatch }) => {
    return(
    <View>
      <View style={styles.aisleScreen}>
        <View style={styles.ScreenHeader}>
          <Image
            source={require('../images/logo.png')}
            style={[styles.big_icon]} />
        </View>
        <ScrollView horizontal={true} style={styles.allAislesScroll}>
        {
          aisles.map(function(aisle) {
            console.log(aisle);
            return(
              <View key={aisle['id']} style={ styles.aisleSelectDiv }>
                <TouchableHighlight onPress={() => dispatch({ type: 'Set Aisle' })}>
                  <Image source={ {uri: aisle['img']} } style={styles.aisleSelectImage} />
                </TouchableHighlight>
                <Text style={styles.aisleScrollTitle}>{ aisle['title'] }</Text>
              </View>
            )
          })
        }
        </ScrollView>
      <View style={styles.currentAisle}>
        <Text style={styles.productHeader}>{ aisleSelected }</Text>
        <Aisle selectedAisle={aisleSelected} />
      </View>
    </View>
  </View>
    )
  };

BrowseScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

BrowseScreen.navigationOptions = {
  title: 'Aisles',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../images/store.png')}
      style={[styles.icon]} />
  ),
};

const mapStateToProps = state => ({
  aisleSelected: state.aisleSelected.aisleSelected,
  aisles: state.aisles.aisles
});

export default connect(mapStateToProps)(BrowseScreen);
