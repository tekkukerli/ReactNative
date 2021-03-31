import firestore from '@react-native-firebase/firestore';
// after other imports
import "firebase/firestore"

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

firebase.initializeApp(config)

// just before export default statement
export const firestore = firebase.firestore()
export default firebase