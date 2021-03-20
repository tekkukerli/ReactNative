// screens/ProductList.js

import React, { Component } from 'react';
import {
            StyleSheet,
            Text,
            View,
            TouchableOpacity,
            Image,

            Button } from 'react-native';

import StarRating from 'react-native-star-rating';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductPage from './ProductPage';

// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';

class ProductList extends Component {

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
    <View style={styles.containerColumn}>

         <View style={styles.containerRow}>
               <View style={styles.container1}>
                    <Image source={require('../Resources/pitsa.png')} style={styles.image}/>
               </View>

               <View style={styles.container2}>
                <Text style={styles.titleText}>Hot dogi pizza mozzarella ja cheddari juustuga</Text>
                <Text style={styles.textStyle}>Rannarootsi</Text>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    fullStarColor={'orange'}
                    emptyStarColor={'orange'}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                 />
                </View>
          </View>

         <View style={styles.containerRow}>
             <View style={styles.container1}>
                  <Image source={require('../Resources/pitsa.png')} style={styles.image}/>
             </View>

             <View style={styles.container2}>
                  <Text style={styles.titleText}>Hot dogi pizza mozzarella ja cheddari juustuga</Text>
                  <Text style={styles.textStyle}>Rannarootsi</Text>
                  <StarRating
                      disabled={false}
                      maxStars={5}
                      fullStarColor={'orange'}
                      emptyStarColor={'orange'}
                      rating={this.state.starCount}
                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                   />
              </View>

         </View>

        <View style={styles.container}>

             <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.buttonStyle}
                  onPress={() => this.props.navigation.navigate('AddProduct')}>
                  <Text >Lisa uus</Text>
                </TouchableOpacity>
        </View>

   </View>






    );
  }
}

const styles = StyleSheet.create({
containerColumn: {
      flexDirection: 'column',
      padding: 10,
      height: 800
  },
containerRow: {
      flexDirection: 'row',
      height: 200
  },
  container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
    },
  container1: {
      flex: 0.4,
      padding: 10,
      backgroundColor: '#F2F2F2',
  },
  container2: {
        flex: 0.6,
        padding: 10,
        backgroundColor: '#F2F2F2',
    },
  image: {
    width: 177,
    height: 138,
    alignItems: 'flex-start',
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
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'flex-end',
        padding: 10,
      },
     textStyle: {
        fontSize: 16,
        padding: 10,
        color: 'black',
        alignItems: 'flex-end',

      },

});

export default ProductList;