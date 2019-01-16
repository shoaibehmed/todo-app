import React, { Component } from 'react';

import LoginComponent from './../components/login-component';

export default class LoginContainer extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <LoginComponent />;
  }
}
