import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyC8XSti02w4B0Jlbdn2dJsKQHpqt1vKMvI",
    authDomain: "authentication-6efb4.firebaseapp.com",
    databaseURL: "https://authentication-6efb4.firebaseio.com",
    storageBucket: "authentication-6efb4.appspot.com",
    messagingSenderId: "456466240829"
  });
}


  render() {
    return(
      <View>
        <Header headerText="Log In" />
        <LoginForm />
      </View>
    );
  }
}
export default App;
