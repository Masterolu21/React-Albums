import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }; //state is what we use to react to user events

  onButtonPress() {
    //this is a helper method

    const { email, password /*references this to get access to the variables*/ } = this.state;

    this.setState({ error: '', loading: true });/*if i fail to login once and
    attempt to login again the error message will clear out.*/
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'AuthenticationFailed. '});
          });
    });
  }
renderButton(){

  if (this.state.loading) {
    return <Spinner size="small" />

  }
  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Log in
    </Button>
  );
}

render() {
  return(
    <Card>
      <CardSection>
        <Input
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry //turns text into *** good for passwords
          label="Password"
          placeholder="password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      <CardSection>
        {this.renderButton()}
      </CardSection>
    </Card>
    );
  }
}
  const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center', //CENTERTEXT TO SCREEN
      color: 'red'
    }
  };

export default LoginForm;
