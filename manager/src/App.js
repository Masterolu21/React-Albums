import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {

  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyBledbMql1cPv7dStpXm7uI-MRifu2PT5I',
    authDomain: 'manager-23202.firebaseapp.com',
    databaseURL: 'https://manager-23202.firebaseio.com',
    projectId: 'manager-23202',
    storageBucket: 'manager-23202.appspot.com',
    messagingSenderId: '316205526624'
  };
  firebase.initializeApp(config);
  }

  render() {
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
  /*wires up ReduxThunk*/

    return (
      // createStore expects a function (reducers)
      // function() {} == () =>{} same shit
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
