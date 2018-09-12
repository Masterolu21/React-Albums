import React from 'react';
import { View, Text, Button, Image } from 'react-native';

 class Artists extends React.Component {
  static navigationOptions= {
    tabBarLabel: 'Artists'
  }
    render() {
      return (
      <View>
        <Text>
          This is Tab 4
        </Text>
      </View>
        );
      }
    }
export default Artists;
