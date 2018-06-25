// Index.ios.js - place code in here for IOS!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'; // ./ means to start from current directory
import AlbumList from './src/components/AlbumList';
// Create a component
 const App = () => (
   <View>
  <Header headerText={'Albums'/*Jsx code*/} />
  <AlbumList /*jsx tells react native what content we want t show on the screen*/ /> /
   </View>
);

//Render it to device
AppRegistry.registerComponent('albums', () => App);
//Whenever you do any React Application you must register at least one component
//Only the 'root' component uses AppRegistry
