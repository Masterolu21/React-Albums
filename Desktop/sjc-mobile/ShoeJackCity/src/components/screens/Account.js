import React from 'react';
import {View, Image, TouchableOpacity, Text, TextInput, AppRegistry } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {Card, Button, Spinner, CardSection} from '../common';
import LoginForm from '../LoginForm';

class Account extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Account'
  }
  render() {
    return (<View style={styles.containerStyle}>
      <Card>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../Images/ShoeJackCityLogo.png')}/>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </Card>
    </View>);
  }
}

class SignUpForm extends React.Component {
  render() {
    return (<View style={styles.registerContainer}>
      <TextInput placeholder="Username or email" placeholderTextColor='white' returnKeyType='next' style={styles.input} keyboardType="email-address" onSubmitEditing={() => this.EmailInput.focus()}/>

      <TextInput placeholder="Email" placeholderTextColor='white' returnKeyType='next' style={styles.input} keyboardType="email-address" onSubmitEditing={() => this.passwordInput.focus()}/>

      <TextInput secureTextEntry="secureTextEntry"
        //turns text into *** good for passwords
        label="Password" placeholder="password" placeholderTextColor='white' returnKeyType='go' style={styles.input} ref={(input) => this.passwordInput = input}/>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>);
  }
}


const RootStack = createStackNavigator({
  Account: {
    screen: Account
  },
  Signup: {
    screen: SignUpForm
  },
  Login: {
    screen: LoginForm
  }
});

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#F13C20',
    paddingBottom: 20
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 0
  },
  logo: {
    paddingTop: 15,
    width: 200,
    height: 200
  },
  registerContainer: {
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
};

AppRegistry.registerComponent('App', () => App);
