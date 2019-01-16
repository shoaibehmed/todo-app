import React, { Component } from 'react';

import FeedComponent from './../components/feed-component';

export default class FeedContainer extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <FeedComponent />;
  }
}
