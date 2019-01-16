import { createStackNavigator } from 'react-navigation';

import Add from './../../../features/add/container/add-container';

export default createStackNavigator(
  {
    Add: { screen: Add }
  },
  { initialRouteName: 'Add' }
);
