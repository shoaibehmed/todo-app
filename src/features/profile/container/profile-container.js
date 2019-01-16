import React, { Component } from 'react';

import ProfileComponent from './../components/profile-component';
import HeaderComponent from './../../../shared/components/header/header-component';

export default class ProfileContainer extends Component {
  static navigationOptions = {
    header: <HeaderComponent title={'Hello, Ali'} />
  };

  render() {
    return <ProfileComponent />;
  }
}
