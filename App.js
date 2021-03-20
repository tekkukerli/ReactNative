// App.js

import React from 'react';
import {Platform, StyleSheet, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
            headerRight: () => (
                <Image source={require('./Resources/edit.png')} style={styles.image}/>
              ),
       }}
      />

       <Stack.Screen
         name="ProductList"
         component={ProductList}
         options={{ title: ''}}
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


