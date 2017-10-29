import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Text>
          Clicked: {this.props.value} times
        </Text>
          <Button title="Increment" onPress={this.props.onIncrement} />
          <Button title="Decrement" onPress={this.props.onDecrement} />
      </View>
    )
  }
}

export default Counter;
