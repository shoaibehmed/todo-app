import React, { Component } from 'react';

import FeedComponent from './../components/feed-component';
import HeaderComponent from './../../../shared/components/header/header-component';

export default class FeedContainer extends Component {
  static navigationOptions = {
    header: <HeaderComponent title={'Todo'} />
  };

  render() {
    return <FeedComponent />;
  }
}
