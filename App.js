import React, { Component } from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AsyncStorage } from 'react-native';

// redux
import { Provider } from 'react-redux';
import configureStore from './src/reducers/store';

// actions
import { setUser } from './src/features/login/actions/login-actions';
import { setFeed } from './src/features/feed/actions/feed-actions';

// signed out routes
import SignedOutRoutes from './src/routes/signed-out/signed-out-routes';

// signed in routes
import SignedInRoutes from './src/routes/signed-in/index';

const createNavigator = signedIn => {
  const appNavigator = createSwitchNavigator(
    {
      SignedOut: { screen: SignedOutRoutes },
      SignedIn: { screen: SignedInRoutes }
    },
    { initialRouteName: signedIn ? 'SignedIn' : 'SignedOut' }
  );

  return createAppContainer(appNavigator);
};

const store = configureStore();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      checkedifSignedIn: false
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('user')
      .then(res => {
        const signedIn = JSON.parse(res);
        if (!!signedIn === true) {
          store.dispatch(setUser(signedIn));
        }
        this.setState({ isSignedIn: !!signedIn, checkedifSignedIn: true });
      })
      .catch(error => console.warn(error));
  }

  render() {
    if (!this.state.checkedifSignedIn) {
      return null;
    } else {
      const Layout = createNavigator(this.state.isSignedIn);
      return (
        <Provider store={store}>
          <Layout />
        </Provider>
      );
    }
  }
}
