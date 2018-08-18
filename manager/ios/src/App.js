import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
/* the provider tag is what connects to the connect tag
and allows the connect tag to connect to the store
and pass it off to all our components */
import {createStore} from 'redux';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <View>
          <Text>
          Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
