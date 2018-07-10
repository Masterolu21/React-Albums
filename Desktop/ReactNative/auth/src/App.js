import React, { Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null } //doesn't know if your 'e logged in or not
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
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });

        } else {
          this.setState({ loggedIn: false })
        }

      });

  }
renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
        Log Out
        </Button>
    );
    case false:
      return <LoginForm />;
    default:
      return <Spinner size="large" />;
  }
  if( this.state.loggedIn){
    return (
      <Button>
        Log Out
      </Button>
    );
  }

  return <LoginForm />;
}

  render() {
      return (
        <View>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>


      );
  }
}

export default App;
