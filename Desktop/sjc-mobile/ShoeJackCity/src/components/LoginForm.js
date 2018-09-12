import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username or email"
          placeholderTextColor='white'
          returnKeyType='next'
          style={styles.input}
          keyboardType="email-address"
          onSubmitEditing={() => this.passwordInput.focus()}
        />

        <TextInput
          secureTextEntry //turns text into *** good for passwords
          label="Password"
          placeholder="password"
          placeholderTextColor='white'
          secureTextEntry
          returnKeyType='go'
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
      <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}> Need help logging in?{'\n'}
          or
        </Text>
        <View style={styles.divider} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('Signup')}
      >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
   backgroundColor: '#FCD183',
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 10
  },
    buttonContainer: {
      backgroundColor: '#FCBA12',
      paddingVertical: 15,
      marginBottom: 10,
      borderRadius: 10
  },
    divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
    buttonText: {
      textAlign: 'center',
      color: 'white'

    },
    textStyle: {
      color: 'white',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10
    }
});

export default LoginForm;
