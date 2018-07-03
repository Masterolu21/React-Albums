import React, { Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount()//lifecyclemethod are automatically invoked within our compnent
  {
    firebase.initializeApp({
//firebase config setup
    apiKey: 'AIzaSyAjaRfDnHXkxQEAcJr0DtisRzkh-mTs_IA',
    authDomain: 'authentication-e01b9.firebaseapp.com',
    databaseURL: 'https://authentication-e01b9.firebaseio.com',
    projectId: 'authentication-e01b9',
    storageBucket: 'authentication-e01b9.appspot.com',
    messagingSenderId: '893036598019'
    });
  }
  render() {
      return (
        <View>
          <Header headerText="Authentication" />
          <LoginForm />
        </View>


      );
  }
}

export default App;
