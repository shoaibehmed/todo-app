import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AsyncStorage } from 'react-native';

// actions
import { setFormData, setUser } from './../actions/login-actions';

import LoginComponent from './../components/login-component';

class LoginContainer extends Component {
  static navigationOptions = {
    header: null
  };

  onChange(name, value) {
    this.props.setFormData(name, value);
  }

  onSubmit() {
    const { name } = this.props;
    if (name) {
      AsyncStorage.setItem('user', JSON.stringify(name))
        .then(() => {
          this.props.setUser(name);
          this.navigate('SignedIn');
        })
        .catch(error => console.warn(error));
    }
  }

  navigate(route) {
    this.props.navigation.navigate(route);
  }

  render() {
    return (
      <LoginComponent
        name={this.props.name}
        onChange={this.onChange.bind(this)}
        onSubmit={this.onSubmit.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => ({
  name: state.login.formData.name
});

const mapDispatchToProps = dispatch => ({
  setFormData: bindActionCreators(setFormData, dispatch),
  setUser: bindActionCreators(setUser, dispatch)
});

LoginContainer.propTypes = {
  setFormData: PropTypes.func,
  setUser: PropTypes.func,
  name: PropTypes.string,
  navigation: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
