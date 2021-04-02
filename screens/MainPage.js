// screens/MainPage.js

import React, { Component } from 'react';
import {  StyleSheet, Button, View, Text, Image, activeOpacity, TouchableOpacity } from 'react-native';

class MainPage extends Component {
  render() {
//const {navigate} = this.props.navigation;
    return (
       <View style={styles.container}>

        <Text style={styles.titleText}>MeatRate</Text>

        <TouchableOpacity activeOpacity = { 0.5 } onPress={() => this.props.navigation.navigate('AddProduct')}>
            <Image source={require('../Resources/giphy.gif')} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate('ProductList')} >
              <Text style={styles.textStyle2}>Vaata tooteid</Text>
         </TouchableOpacity>

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
     textStyle2: {
         fontSize: 16,
         padding: 10,
         color: 'black',
         alignItems: 'center',
         fontWeight: 'bold',
       },
   buttonStyle: {
         alignItems: 'center',
         backgroundColor: '#fff',
         padding: 5,
         marginVertical: 10,
         width: 200,
         borderColor: '#FFA500',
         borderWidth: 2,
         borderRadius: 10
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