// screens/ProductPage.js

import React, { Component } from 'react';
import {  StyleSheet, Button, View, Text, Image } from 'react-native';

import StarRating from 'react-native-star-rating';

// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';

class ProductPage extends Component {

   constructor(props) {
      super(props);
      this.state = {
        starCount: 4
      };
    }

    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }

  render() {
    return (
      <View style={{ flex: 1,  justifyContent: 'center' }}>

        <Image source={require('../Resources/pitsa.png')} style={styles.image}/>
        <Text>Hot dogi pizza mozzarella ja cheddari juustuga!</Text>
        <Text>Rannarootsi</Text>

        <StarRating
            disabled={false}
            maxStars={5}
            fullStarColor={'orange'}
            emptyStarColor={'orange'}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
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

export default ProductPage;