import React, { Component } from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// signed out routes
import SignedOutRoutes from './src/routes/signed-out/signed-out-routes';

// signed in routes
import SignedInRoutes from './src/routes/signed-in/index';

const createNavigator = () => {
  const appNavigator = createSwitchNavigator(
    {
      SignedOut: { screen: SignedOutRoutes },
      SignedIn: { screen: SignedInRoutes }
    },
    { initialRouteName: 'SignedIn' }
  );

  return createAppContainer(appNavigator);
};

const Layout = createNavigator();

export default class App extends Component {
  render() {
    return <Layout />;
  }
}
