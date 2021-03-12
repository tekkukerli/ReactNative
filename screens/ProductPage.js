// screens/ProductPage.js

import React, { Component } from 'react';
import {  StyleSheet, Button, View, Text, Image } from 'react-native';

class ProductPage extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>ProductPage Screen</Text>
        <Image source={require('../Resources/pitsa.jpg')} style={styles.image}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 267,
    height: 188,
  },

});

export default ProductPage;