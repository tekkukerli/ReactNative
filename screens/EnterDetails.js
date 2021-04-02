// screens/EnterDetails.js

import React, { Component } from 'react';
import {  StyleSheet, Button, TouchableOpacity, View, KeyboardAvoidingView, Text, Image, SafeAreaView, TextInput } from 'react-native';

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import StarRating from 'react-native-star-rating';

class EnterDetails extends Component {

   constructor(props) {
      super(props);

      this.state = {
        uri: '',
        productName: '',
        starCount: 0
      };
      this.onSubmit = this.onSubmit.bind(this)
    }

    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });

    }



    onSubmit = async() => {

        const { uri } = this.props.route.params;

        let {  productName, starCount } = this.state;


        // Generate "locally" a new document in a collection
        const document = firebase.firestore().collection('products').doc();

        // Get the new document Id
        const documentUuid = document.id;

         document
                .set({
                    uuid: documentUuid,
                    uri: uri,
                    productName,
                    starCount
                })

                .then(function(docRef) {
                     //id  = docRef.id;
                    //console. log("variable id: ", id);

                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });



            const docRef = firebase.firestore().collection('products').doc(documentUuid);

                docRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log('Document data:', doc.data());

                            productName = doc.data().productName;
                            console.log('productName: ', productName);

                            const starCount = doc.data().starCount;
                            console.log('starCount: ', starCount);

                            const uri = doc.data().uri;
                            console.log('uri: ', uri);
                        } else {
                           console.log('No such document!');
                        }
               }).catch((error) => {
                   console.log("Error getting document:", error);
               });

                console. log("------documentUuid: ", documentUuid);
                this.props.navigation.navigate('ProductPage', { idR: documentUuid, productName: productName, starCount: starCount, uri: uri });

    }

  render() {

  const { uri } = this.props.route.params;

    return (

    <KeyboardAvoidingView style={styles.container} behavior="padding">

           <View style={styles.containerP}>
                <Image
                   source={{uri: uri}}
                   style={styles.imageStyle}
                />

                <Text style={styles.titleText}>Toote nimi:* </Text>

                 <SafeAreaView>
                      <TextInput
                        style={styles.input}
                        onChangeText={(productName) => this.setState({productName})}
                      />
                 </SafeAreaView>

                <StarRating
                    style={styles.stars}
                    disabled={false}
                    maxStars={5}
                    starSize= {50}
                    fullStarColor={'orange'}
                    emptyStarColor={'orange'}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                 />

                 <TouchableOpacity
                   activeOpacity={0.5}
                   style={styles.buttonStyle}
                   onPress={() => this.onSubmit()}>
                   <Text style={styles.textStyle2}>Lisa</Text>
                 </TouchableOpacity>


           </View>

     </KeyboardAvoidingView>

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

      backgroundColor: '#F2F2F2',
      alignItems: 'center',

  },
  containerT: {
      flex: 0.5,
      backgroundColor: '#F2F2F2',
      alignItems: 'flex-start',
      padding: 10,
    },

  image: {
    width: 297,
    height: 218,
    margin:20,

  },
   imageStyle: {
      width: 200,
      height: 200,
      margin: 5,
    },
    buttonStyle: {
         alignItems: 'center',
         backgroundColor: '#fff',
         padding: 5,
         marginVertical: 65,
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
        marginTop: 25,
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
         alignItems: 'flex-start',
         fontWeight: 'bold',
       },
       input: {
          height: 35,
          marginTop: 25,
          marginBottom: 35,
          borderWidth: 1,
          width: 300,
          borderColor: 'black',
        },
});

export default EnterDetails;