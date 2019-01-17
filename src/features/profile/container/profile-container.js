import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AsyncStorage } from 'react-native';

import { logout } from './../../login/actions/login-actions';

import ProfileComponent from './../components/profile-component';
import HeaderComponent from './../../../shared/components/header/header-component';

class ProfileContainer extends Component {
  static navigationOptions = {
    header: <HeaderComponent title={'Hello, Ali'} />
  };

  onLogout() {
    const { user } = this.props;

    AsyncStorage.multiRemove(['user', `${user}-feed`])
      .then(() => {
        this.props.logout();
        this.navigate('SignedOut');
      })
      .catch(error => console.warn(error));
  }

  navigate(route) {
    this.props.navigation.navigate(route);
  }

  render() {
    return <ProfileComponent onLogout={this.onLogout.bind(this)} />;
  }
}

const mapStateToProps = state => ({
  user: state.login.user
});

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
});

ProfileContainer.propTypes = {
  navigation: PropTypes.object,
  logout: PropTypes.func,
  user: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
