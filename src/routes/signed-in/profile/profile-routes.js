import { createStackNavigator } from 'react-navigation';

import UserProfile from './../../../features/profile/container/profile-container';

export default createStackNavigator(
  {
    UserProfile: { screen: UserProfile }
  },
  { initialRouteName: 'UserProfile' }
);
