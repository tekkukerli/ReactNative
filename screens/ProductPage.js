// screens/ProductPage.js

import React, { Component } from 'react';
import { ScrollView, RefreshControl, StyleSheet, Button, TouchableOpacity, View, Text, Image } from 'react-native';
import {
  Route,
} from "react-router-native";

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import StarRating from 'react-native-star-rating';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

class ProductPage extends Component {

   constructor(props) {
      super(props);

      this.state = {
        idR: '',
        productName: '',
        starCount: 0,
        uri: '',
        refreshing: false,
      };
    }

_onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {

    const { idR } = this.props.route.params;
    console.log('idR:', idR);

    const { productName } = this.props.route.params;
    console.log('productName:', productName);

     const { starCount } = this.props.route.params;
     console.log('starCount:', starCount);

     const { uri } = this.props.route.params;
     console.log('uri:', uri);

    const docRef = firebase.firestore().collection('products').doc(idR);


    return (
    <SafeAreaView style={styles.container}>
    <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                  />
            }

            >


           <View style={styles.containerP}>
                <Image source={{uri: uri}} style={styles.image}/>
            </View>

           <View style={styles.containerT}>
                <Text style={styles.titleText}> {productName}</Text>
           </View>

           <View style={styles.containerS}>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    starSize= {60}
                    fullStarColor={'orange'}
                    emptyStarColor={'orange'}
                    rating={starCount}
                 />
            </View>

            <View style={styles.containerB}>
                 <TouchableOpacity
                   activeOpacity={0.5}
                   style={styles.buttonStyle}
                   onPress={() => this.props.navigation.navigate('ProductList')}>
                   <Text style={styles.textStyle2}>Vaata kõiki</Text>
                 </TouchableOpacity>
           </View>


     </ScrollView>
 </SafeAreaView>
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
      flex: 0.2,
      backgroundColor: '#F2F2F2',
      alignItems: 'flex-start',
      padding: 10,
    },
 containerS: {
      flex: 0.2,
      padding: 10,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
      height: 600,
      marginBottom:20
  },
   containerB: {
        flex: 0.2,
        padding: 10,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        height: 600,
    },
  image: {
    width: 300,
    height: 300,
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
        fontSize: 24,
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
       star: {
          marginTop: 0,
          marginBottom: 50
       }
});

export default ProductPage;