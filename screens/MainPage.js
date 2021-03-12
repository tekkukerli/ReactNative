// screens/MainPage.js

import React, { Component } from 'react';
import {  StyleSheet, Button, View, Text, Image } from 'react-native';

class MainPage extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Welcome!</Text>

        <Button
          title="Go to AddProduct"
          onPress={() => this.props.navigation.navigate('AddProduct')}
        />
        <Button
          title="Go to ProductPage"
          onPress={() => this.props.navigation.navigate('ProductPage')}
        />
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

export default MainPage;