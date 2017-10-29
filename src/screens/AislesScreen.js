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
      urlSelected:'',
      new_product: ''
    };
  }

  alertMe(aisleSelected, urlSelected, new_product) {
    this.setState({ aisleSelected: aisleSelected });
    this.setState({ urlSelected: urlSelected });
    this.setState({ new_product: new_product });
  }

  render() {
    return(
      <View style={styles.aisleScreen}>
        <View style={styles.ScreenHeader}>
          <Image
            source={require('../images/logo.png')}
            style={[styles.big_icon]} />
        </View>
        <ScrollView horizontal={true} style={styles.allAislesScroll}>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => this.alertMe(aislesData[0].title, aislesData[0].url, aislesData[0].title)}>
              <Image source={ {uri: aislesData[0].img} } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[0].title } </Text>
          </View>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => this.alertMe(aislesData[1].title, aislesData[1].url, aislesData[1].title)}>
              <Image source={ {uri: aislesData[1].img} } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[1].title } </Text>
          </View>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => this.alertMe(aislesData[2].title, aislesData[2].url, aislesData[2].title)}>
              <Image source={ {uri: aislesData[2].img} } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[2].title } </Text>
          </View>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => this.alertMe(aislesData[3].title, aislesData[3].url, aislesData[3].title)}>
              <Image source={ {uri: aislesData[3].img} } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[3].title } </Text>
          </View>
          <View style={ styles.aisleSelectDiv }>
            <TouchableHighlight onPress={() => this.alertMe(aislesData[4].title, aislesData[4].url, aislesData[4].title)}>
              <Image source={ {uri: aislesData[4].img} } style={styles.aisleSelectImage} />
            </TouchableHighlight>
            <Text style={styles.aisleScrollTitle}>{ aislesData[4].title } </Text>
          </View>
        </ScrollView>
        <View style={styles.currentAisle}>
          <Aisle urlSelected={this.state.urlSelected} aisleSelected={this.state.aisleSelected} />
        </View>
      </View>
    )
  }
};



module.exports = AislesScreen;
