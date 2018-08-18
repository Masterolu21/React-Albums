import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
    /*calling an action creator to update our app state with new value user
    types in*/
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password })
    /* Expects an object with email and password properties */
  }

  renderError() {
    if(this.props.error){
      return (
          <View style={{ backgroundColor: 'white'}}>
            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>
          </View>
      );
      /*if there is an error it will show an error to the user*/
    }
  }

  render() {
    return (

      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)} /*callback function*/
            value={this.props.email}
            />
        </CardSection>

        <CardSection>
            <Input
              secureTextEntry /*hides password*/
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
        </CardSection>

{this.renderError()}

        <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Login
            </Button>
        </CardSection>
      </Card>
    );

  }
}
const styles = {
  errorTextStyle: {
  fontSize: 20,
  alignSelf:'center',
  color: 'purple'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  };
};
export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser })(LoginForm);
