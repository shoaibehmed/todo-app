import { createStackNavigator } from 'react-navigation';

// containers
import Login from './../../features/login/container/login-container';

export default createStackNavigator(
  {
    Login: { screen: Login }
  },
  { initialRouteName: 'Login' }
);
