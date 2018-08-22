import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

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
    this.props.loginUser({ email, password });
    /* Expects an object with email and password properties */
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    
    return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Login
    </Button>
  );
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

        <Text style={styles.errorTextStyle}>
          {this.props.error}
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
  alignSelf:'center',
  color: 'purple'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

const loginProps = { emailChanged, passwordChanged, loginUser };
export default connect(mapStateToProps, loginProps)(LoginForm);
