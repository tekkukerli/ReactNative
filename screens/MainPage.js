// screens/MainPage.js

import React, { Component } from 'react';
import {  StyleSheet, Button, View, Text, Image } from 'react-native';

class MainPage extends Component {
  render() {
    return (
       <View style={styles.container}>

        <Text style={styles.titleText}>MeatRate</Text>
        <Image source={require('../Resources/giphy.gif')} style={styles.image}/>

        <Button
          title="Go to AddProduct"
          onPress={() => this.props.navigation.navigate('AddProduct')}
        />
        <Button
          title="Go to ProductPage"
          onPress={() => this.props.navigation.navigate('ProductPage')}
        />
        <Button
          title="Go to ProductList"
          onPress={() => this.props.navigation.navigate('ProductList')}
        />
        <Button
          title="Go to EnterDetails"
          onPress={() => this.props.navigation.navigate('EnterDetails')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
    },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    marginTop: 70
  },
  image: {
    width: 210,
    height: 204,
    margin: 20,
  },

});

export default MainPage;