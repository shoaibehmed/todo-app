import React, { Component } from 'react';

import AddComponent from './../components/add-component';
import HeaderComponent from './../../../shared/components/header/header-component';

export default class AddContainer extends Component {
  static navigationOptions = {
    header: <HeaderComponent title={'Add'} />
  };

  render() {
    return <AddComponent />;
  }
}
