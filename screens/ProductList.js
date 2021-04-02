// screens/ProductList.js

import React, { Component } from 'react';
import {
            StyleSheet,
            Text,
            View,
            TouchableOpacity,
            Image,
            SafeAreaView,
            ScrollView,
            Button } from 'react-native';

import StarRating from 'react-native-star-rating';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import ProductPage from './ProductPage';

class ProductList extends Component {

   state = { Matches: [] };

    componentDidMount() {
      firebase
        .firestore()
        .collection("products")
        .get()
        .then(querySnapshot => {
          const Matches = [];

          querySnapshot.forEach(function(doc) {
            Matches.push({
              uri: doc.data().uri,
              productName: doc.data().productName,
              starCount: doc.data().starCount,
            });
          });

          this.setState({ Matches });
        })
        .catch(function(error) {
          console.log("My Error : ", error);
        });
    }



  render() {

    let query = firebase.firestore().collection('products').where('uuid',  '>=', '');

    query.get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        let productId = documentSnapshot.ref.id;
        console.log(productId);

      });
      console.log('************************************');
    });


    return (

        <SafeAreaView style={styles.containerColumn}>
            <ScrollView>

                    <View style={styles.container}>
                         <TouchableOpacity
                              activeOpacity={0.5}
                              style={styles.buttonStyle}
                              onPress={() => this.props.navigation.navigate('AddProduct')}>
                              <Text >Lisa uus</Text>
                        </TouchableOpacity>
                    </View>
                {this.state.Matches.map(v => {
                          return (

                           <View style={styles.containerRow}>

                                <View style={styles.container1}>
                                    <Image key="{v}" source={{uri: v.uri}} style={styles.image}/>
                                </View>

                                <View style={styles.container2}>
                                    <Text key="{v.}" style={styles.titleText}>{v.productName}</Text>

                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        fullStarColor={'orange'}
                                        emptyStarColor={'orange'}
                                        rating={v.starCount}
                                        key="{v}"
                                     />
                                </View>

                            </View>
                          );

                        })}

            </ScrollView>
        </SafeAreaView>
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
        flex: 0.2,
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
        width: 200
      },
     textStyle: {
        fontSize: 16,
        padding: 10,
        color: 'black',
        alignItems: 'flex-end',

      },

});

export default ProductList;