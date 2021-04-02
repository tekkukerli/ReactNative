// screens/ProductPage.js

import React, { Component } from 'react';
import {  StyleSheet, Button, TouchableOpacity, View, Text, Image } from 'react-native';
import {
  Route,
} from "react-router-native";

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import StarRating from 'react-native-star-rating';

class ProductPage extends Component {

   constructor(props) {
      super(props);
      this.state = {
        idR: '',
        starCount: 4
      };
    }

    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }




  render() {

    const { idR } = this.props.route.params;
    console.log('idR:', idR);

    const docRef = firebase.firestore().collection('products').doc(idR);

    docRef.get().then((doc) => {
            if (doc.exists) {
                console.log('Document data:', doc.data());
            } else {
               console.log('No such document!');
            }
   }).catch((error) => {
       console.log("Error getting document:", error);
   });




    return (
    <View style={styles.container}>

           <View style={styles.containerP}>
                <Image source={require('../Resources/pitsa.png')} style={styles.image}/>
            </View>

           <View style={styles.containerT}>
                <Text style={styles.titleText}>Hot dogi pizza mozzarella ja cheddari juustuga</Text>

                <Text style={styles.textStyle}>id: {idR}</Text>

           </View>

           <View style={styles.containerS}>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    starSize= {60}
                    fullStarColor={'orange'}
                    emptyStarColor={'orange'}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                 />

                 <TouchableOpacity
                   activeOpacity={0.5}
                   style={styles.buttonStyle}
                   onPress={() => this.props.navigation.navigate('ProductList')}>
                   <Text style={styles.textStyle2}>Vaata kõiki</Text>
                 </TouchableOpacity>
           </View>

     </View>

    );
  }
}

const styles = StyleSheet.create({
 container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#F2F2F2',
      margin:20
  },
  containerP: {
      flex: 1,
      padding: 10,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
      height: 800
  },
  containerT: {
      flex: 0.4,
      backgroundColor: '#F2F2F2',
      alignItems: 'flex-start',
      padding: 10,
    },
 containerS: {
      flex: 0.5,
      padding: 10,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
      height: 600,

  },
  image: {
    width: 367,
    height: 288,
    margin:30,

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
        alignItems: 'flex-start',
        padding: 10,
      },
      textStyle: {
           fontSize: 16,
           padding: 10,
           color: 'black',
           alignItems: 'flex-start',

         },
      textStyle2: {
         fontSize: 16,
         padding: 10,
         color: 'black',
         alignItems: 'center',
         fontWeight: 'bold',
       },
});

export default ProductPage;