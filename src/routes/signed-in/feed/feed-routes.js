import { createStackNavigator } from 'react-navigation';

import Feed from './../../../features/feed/container/feed-container';

export default createStackNavigator(
  {
    Feed: { screen: Feed }
  },
  { initialRouteName: 'Feed' }
);
