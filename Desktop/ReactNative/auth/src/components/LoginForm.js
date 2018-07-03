import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: ' ' }; //state is what we use to react to user events
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

      <CardSection />

      <CardSection>
        <Button>
          Log in
        </Button>
      </CardSection>
    </Card>
  );
}

}

export default LoginForm;
