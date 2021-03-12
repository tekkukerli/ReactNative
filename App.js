// App.js

import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddProduct from './screens/AddProduct';
import MainPage from './screens/MainPage';
import ProductPage from './screens/ProductPage';

const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        initialRouteName="MainPage"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
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
        options={{ title: 'Mainpage' }}
       />

      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{ title: 'Add a Product' }}
      />

      <Stack.Screen
       name="ProductPage"
       component={ProductPage}
       options={{ title: 'ProductPage' }}
      />

    </Stack.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}


