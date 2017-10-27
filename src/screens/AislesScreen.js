import React, { Component } from 'react';
import {Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import styles from '../stylesheets/style.js';
import Aisle from './_Aisle.js';

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

class AislesScreen extends Component {
  constructor() {
    super();
    this.alertMe = this.alertMe.bind(this);
    this.state = {
      aisleSelected:'',
      urlSelected:'https://barner-marketplace-api.herokuapp.com/products',
      new_product: ''
    };
  }

  alertMe() {
    this.setState({ aisleSelected: aislesData[0].title  });
    this.setState({ urlSelected: aislesData[0].title });
    this.setState({ new_product: aislesData[0].title  });
  }

  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView horizontal={true} style={styles.allAislesScroll}>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => this.alertMe()}>
              <Image source={ require('../images/home.jpg') } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[0].title } </Text>
          </View>
          <View style={ styles.aisleSelectDiv }><Image source={ require('../images/home.jpg') } style={styles.aisleSelectImage}/><Text style={styles.aisleScrollTitle}>{ aislesData[0].title } </Text></View>
          <View style={ styles.aisleSelectDiv }><Image source={ require('../images/home.jpg') } style={styles.aisleSelectImage}/><Text style={styles.aisleScrollTitle}>{ aislesData[0].title } </Text></View>
          <View style={ styles.aisleSelectDiv }><Image source={ require('../images/home.jpg') } style={styles.aisleSelectImage}/><Text style={styles.aisleScrollTitle}>{ aislesData[0].title } </Text></View>
          <View style={ styles.aisleSelectDiv }><Image source={ require('../images/home.jpg') } style={styles.aisleSelectImage}/><Text style={styles.aisleScrollTitle}>{ aislesData[0].title } </Text></View>
          <View style={ styles.aisleSelectDiv }><Image source={ require('../images/home.jpg') } style={styles.aisleSelectImage}/><Text style={styles.aisleScrollTitle}>{ aislesData[0].title } </Text></View>
          <View style={ styles.aisleSelectDiv }><Image source={ require('../images/home.jpg') } style={styles.aisleSelectImage}/><Text style={styles.aisleScrollTitle}>{ aislesData[0].title } </Text></View>
          <View style={ styles.aisleSelectDiv }><Image source={ require('../images/home.jpg') } style={styles.aisleSelectImage}/><Text style={styles.aisleScrollTitle}>{ aislesData[0].title } </Text></View>
        </ScrollView>
        <View style={styles.currentAisle}>
          <Aisle urlSelected={this.state.urlSelected} aisleSelected={this.state.aisleSelected} />
        </View>
      </View>
    )
  }
};



module.exports = AislesScreen;
