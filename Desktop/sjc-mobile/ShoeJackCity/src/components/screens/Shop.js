import React from 'react';
import { View, Text, Button, Image } from 'react-native';

export default class Shop extends React.Component {
  static navigationOptions= {
    tabBarLabel: 'Shop'
  }
    render() {
      return (
      <View>
        <Text>
          This is Tab 3
        </Text>
      </View>
        );
      }
    }
