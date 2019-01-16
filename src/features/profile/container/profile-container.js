import React, { Component } from 'react';

import ProfileComponent from './../components/profile-component';

export default class ProfileContainer extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <ProfileComponent />;
  }
}
