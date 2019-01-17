import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AsyncStorage } from 'react-native';

import { setFormData, clearFormData } from './../actions/add-actions';
import { setFeed } from './../../feed/actions/feed-actions';

import AddComponent from './../components/add-component';
import HeaderComponent from './../../../shared/components/header/header-component';

class AddContainer extends Component {
  static navigationOptions = {
    header: <HeaderComponent title={'Add'} />
  };

  onChange(name, value) {
    this.props.setFormData(name, value);
  }

  onAdd() {
    const { formData, feed, user } = this.props;
    if (formData.message && formData.dueDate) {
      const newFeed = [...feed, this.props.formData];

      AsyncStorage.setItem(`${user}-feed`, JSON.stringify(newFeed))
        .then(() => {
          this.props.clearFormData();
          this.props.setFeed(newFeed);
        })
        .catch(error => console.warn(error));
    }
  }

  render() {
    return (
      <AddComponent
        formData={this.props.formData}
        onChange={this.onChange.bind(this)}
        onAdd={this.onAdd.bind(this)}
        colors={this.props.colors}
      />
    );
  }
}

const mapStateToProps = state => ({
  formData: state.add.formData,
  user: state.login.user,
  feed: state.feed.feed,
  colors: state.feed.colors
});

const mapDispatchToProps = dispatch => ({
  setFormData: bindActionCreators(setFormData, dispatch),
  clearFormData: bindActionCreators(clearFormData, dispatch),
  setFeed: bindActionCreators(setFeed, dispatch)
});

AddContainer.propTypes = {
  setFormData: PropTypes.func,
  clearFormData: PropTypes.func,
  setFeed: PropTypes.func,
  feed: PropTypes.array,
  colors: PropTypes.object,
  user: PropTypes.string,
  formData: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContainer);
