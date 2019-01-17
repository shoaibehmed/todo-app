import React, { Component } from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// redux
import { Provider } from 'react-redux';
import configureStore from './src/reducers/store';

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
    { initialRouteName: 'SignedOut' }
  );

  return createAppContainer(appNavigator);
};

const Layout = createNavigator();

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
