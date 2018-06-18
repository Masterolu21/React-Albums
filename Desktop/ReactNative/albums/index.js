// Index.ios.js - place code in here for IOS!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header'; // ./ means to start from current directory
// Create a component
 const App = () => (
  <Header headerText={'ShoeJackCity'} />//Jsx code
  //jsx tells react native what content we want t show on the screen
);

//Render it to device
AppRegistry.registerComponent('albums', () => App);
//Whenever you do any React Application you must register at least one component
//Only the 'root' component uses AppRegistry
