import React, { Component } from 'react';
import { StyleSheet, Text, Image, ScrollView, TouchableHighlight, View } from 'react-native';
import styles from '../stylesheets/style.js';
import Aisle from '../components/Aisle.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

var aislesData = [
  {
    img: 'https://www.army.mil/e2/c/images/2013/02/07/281338/size0.jpg',
    title: 'Prepared Foods',
    url: 'https://barner-marketplace-api.herokuapp.com/products'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/27050121-milk-wallpapers.jpg',
    title: 'Dairy',
    url: 'https://barner-marketplace-api.herokuapp.com/products'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Candy_colors.jpg',
    title: 'Candy',
    url: 'https://barner-marketplace-api.herokuapp.com/products'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Fruits_and_vegetables_at_market.jpg',
    title: 'Veggies',
    url: 'https://barner-marketplace-api.herokuapp.com/products'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/13/HK_Kwun_Tong_Shui_Wo_Street_Market_Cold_Meats.JPG',
    title: 'Meats',
    url: 'https://barner-marketplace-api.herokuapp.com/products'
  },
  {
    img: 'https://c1.staticflickr.com/9/8520/8508069576_c95a895136_b.jpg',
    title: 'Canned Goods',
    url: 'https://barner-marketplace-api.herokuapp.com/products'
  }
  ]


  function alertMe(aisleSelected, urlSelected, new_product) {
    this.setState({ aisleSelected: aisleSelected });
    this.setState({ urlSelected: urlSelected });
    this.setState({ new_product: new_product });
  }

const BrowseScreen = ({ navigation, aisleSelected, dispatch }) => {
    return(
      <View style={styles.aisleScreen}>
        <View style={styles.ScreenHeader}>
          <Image
            source={require('../images/logo.png')}
            style={[styles.big_icon]} />
        </View>

        <ScrollView horizontal={true} style={styles.allAislesScroll}>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => dispatch({ type: aislesData[0].title })}>
              <Image source={ {uri: aislesData[0].img} } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[0].title } </Text>
          </View>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => dispatch({ type: aislesData[1].title })}>
              <Image source={ {uri: aislesData[1].img} } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[1].title } </Text>
          </View>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => dispatch({ type: aislesData[2].title })}>
              <Image source={ {uri: aislesData[2].img} } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[2].title } </Text>
          </View>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => dispatch({  type: aislesData[3].title })}>
              <Image source={ {uri: aislesData[3].img} } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[3].title } </Text>
          </View>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => dispatch({  type: aislesData[4].title })}>
              <Image source={ {uri: aislesData[4].img} } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[4].title } </Text>
          </View>
        </ScrollView>
        <View style={styles.currentAisle}>
          <Aisle />
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
});

export default connect(mapStateToProps)(BrowseScreen);
