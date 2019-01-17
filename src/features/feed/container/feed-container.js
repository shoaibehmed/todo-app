import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AsyncStorage } from 'react-native';

//actions
import { setFeed } from './../actions/feed-actions';

import FeedComponent from './../components/feed-component';
import HeaderComponent from './../../../shared/components/header/header-component';

class FeedContainer extends Component {
  static navigationOptions = {
    header: <HeaderComponent title={'Todo'} />
  };

  componentDidMount() {
    const { user } = this.props;
    AsyncStorage.getItem(`${user}-feed`)
      .then(res => {
        const feed = JSON.parse(res);

        if (feed && feed.length > 0) {
          this.props.setFeed(feed);
        } else {
          this.props.setFeed([]);
        }
      })
      .catch(error => console.warn(error));
  }

  render() {
    return <FeedComponent feed={this.props.feed} colors={this.props.colors} />;
  }
}

FeedContainer.propTypes = {
  user: PropTypes.string,
  feed: PropTypes.array,
  colors: PropTypes.object,
  setFeed: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.login.user,
  feed: state.feed.feed,
  colors: state.feed.colors
});

const mapDispatchToProps = dispatch => ({
  setFeed: bindActionCreators(setFeed, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
