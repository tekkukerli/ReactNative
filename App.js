// App.js

import React from 'react';
import {Platform, StyleSheet, Button, Image} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMqplVPhLxJqAli1c2KTm41Rsopzw7GjY",
  authDomain: "meatrate.firebaseapp.com",
  projectId: "meatrate",
  databaseURL: "meatrate.firebaseapp.com",
  storageBucket: "meatrate.appspot.com",
  messagingSenderId: "734754939497",
  appId: "1:734754939497:web:8759e0167c6d48369cf8f8",
  measurementId: "G-CHFF9Q1NZG"
};

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}

import AddProduct from './screens/AddProduct';
import MainPage from './screens/MainPage';
import ProductPage from './screens/ProductPage';
import ProductList from './screens/ProductList';
import EnterDetails from './screens/EnterDetails';

const Stack = createStackNavigator();

function NavStack() {

  return (
     <Stack.Navigator
        initialRouteName="MainPage"

        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >

      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{ title: '' }}
       />

      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{ title: '' }}
      />

      <Stack.Screen
       name="ProductPage"
       component={ProductPage}
       options={{
            title: '',
       }}
      />

       <Stack.Screen
         name="ProductList"
         component={ProductList}
          options={{
             title: '',
        }}
        />

     <Stack.Screen
         name="EnterDetails"
         component={EnterDetails}
         options={{ title: ''}}
        />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 image: {
    width: 50,
    height: 50,
    alignItems: 'flex-start',
  },
});



export default function App() {

  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}


