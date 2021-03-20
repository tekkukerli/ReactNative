// screens/EnterDetails.js

import React, { Component } from 'react';
import {  StyleSheet, Button, TouchableOpacity, View, Text, Image, SafeAreaView, TextInput } from 'react-native';

import StarRating from 'react-native-star-rating';

// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';

class EnterDetails extends Component {



   constructor(props) {
      super(props);
      this.state = {
        starCount: 0
      };
    }

    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }

  render() {



    return (

    <View style={styles.container}>

           <View style={styles.containerP}>
                <Image source={require('../Resources/pitsa.png')} style={styles.image}/>
            </View>

           <View style={styles.containerT}>

                <Text style={styles.titleText}>Toote nimi*: </Text>

                 <SafeAreaView>
                      <TextInput
                        style={styles.input}

                      />
                 </SafeAreaView>

                 <Text style={styles.titleText}>Tootja: </Text>

                 <SafeAreaView>
                       <TextInput
                          style={styles.input}

                        />
                 </SafeAreaView>


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
                   onPress={() => this.props.navigation.navigate('ProductPage')}>
                   <Text style={styles.textStyle2}>Lisa</Text>
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
      flex: 0.7,
      padding: 10,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',

  },
  containerT: {
      flex: 0.7,
      backgroundColor: '#F2F2F2',
      alignItems: 'flex-start',
      padding: 10,
    },
 containerS: {
      flex: 0.4,
      padding: 10,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',

  },
  image: {
    width: 297,
    height: 218,
    margin:20,

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
       input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          width: 300
        },
});

export default EnterDetails;