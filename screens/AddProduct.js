// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/


import React, {useState, Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Button,
  TextInput
} from 'react-native';

// Import Image Picker
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StarRating from 'react-native-star-rating';
import * as RootNavigation from '../RootNavigation.js';

import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Router, Link, Redirect, StaticRouter } from "react-router-dom";

import ProductPage from './ProductPage';
import EnterDetails from './EnterDetails';

import {
  NativeRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-native";

 const AddProduct = ({ navigation }) => {
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
      //this.props.navigation.navigate('ProductPage', {uri: filePath.uri});
    });
  };

/*if (setFilePath) {
   return
       <Router>
            <Redirect to='ProductPage' />

        </Router>
  }
  return ( <Text>On success</Text>)
  */

  /*  renderElement(){
       if(successed)
          return <Text>data</Text>;
       return null;
    };*/


  return (

    <SafeAreaView style={{flex: 1}}>

        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        />*/}

         <View style={styles.container}>

             {(() => {
               if (filePath.uri){

                      return (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                               <Image
                                     source={{uri: filePath.uri}}
                                     style={styles.imageStyle}
                                   />

                               <TouchableOpacity
                                  activeOpacity={0.5}
                                  style={styles.buttonStyle}
                                  onPress={() => navigation.navigate('EnterDetails', { uri: filePath.uri }) } >
                                  <Text style={styles.textStyle2}>Lisa andmed</Text>
                                </TouchableOpacity>
                            </View>
                      )
               }
               return (
                <View>

                    <Text style={styles.titleText}>Toote lisamine</Text>

                    <TouchableOpacity
                          activeOpacity={0.5}
                          style={styles.buttonStyle}
                          onPress={() => captureImage('photo')}>
                          <Text style={styles.textStyle}>
                            Tee pilt
                          </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                          activeOpacity={0.5}
                          style={styles.buttonStyle}
                          onPress={() => chooseFile('photo')}>
                          <Text style={styles.textStyle}>Lisa albumist</Text>
                    </TouchableOpacity>
                </View>
               )
             })()}

         </View>

    </SafeAreaView>
  );

};




export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    margin:130
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    fontSize: 18,
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
   textStyle2: {
       fontSize: 16,
       padding: 10,
       color: 'black',
       alignItems: 'center',
       fontWeight: 'bold',
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
  imageStyle: {
    width: 200,
    height: 200,
    margin: 25,
  },
});