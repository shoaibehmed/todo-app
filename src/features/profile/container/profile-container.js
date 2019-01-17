import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AsyncStorage } from 'react-native';

import ProfileComponent from './../components/profile-component';
import HeaderComponent from './../../../shared/components/header/header-component';

export default class ProfileContainer extends Component {
  static navigationOptions = {
    header: <HeaderComponent title={'Hello, Ali'} />
  };

  onLogout() {
    AsyncStorage.multiRemove(['user'])
      .then(() => this.navigate('SignedOut'))
      .catch(error => console.warn(error));
  }

  navigate(route) {
    this.props.navigation.navigate(route);
  }

  render() {
    return <ProfileComponent onLogout={this.onLogout.bind(this)} />;
  }
}

ProfileContainer.propTypes = {
  navigation: PropTypes.object
};
