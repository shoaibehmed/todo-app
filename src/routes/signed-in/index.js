import React from 'react';
import PropTypes from 'prop-types';

import { createBottomTabNavigator } from 'react-navigation';

import IIcons from 'react-native-vector-icons/Ionicons';
import SLIcons from 'react-native-vector-icons/SimpleLineIcons';

// containers
import Feed from './feed/feed-routes';
import Add from './add/add-routes';
import Profile from './profile/profile-routes';

export default createBottomTabNavigator(
  {
    Feed: { screen: Feed },
    Add: { screen: Add },
    Profile: { screen: Profile }
  },
  {
    initialRouteName: 'Feed',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: function tabBarIcon({ tintColor }) {
        tabBarIcon.propTypes = {
          tintColor: PropTypes.string
        };

        const { routeName } = navigation.state;
        let IconComponent = IIcons;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `ios-list-box`;
        }
        if (routeName === 'Add') {
          iconName = `md-add`;
        }
        if (routeName === 'Profile') {
          IconComponent = SLIcons;
          iconName = `user`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'rgb(76,217,100)',
      inactiveTintColor: '#dcdcdc',
      showLabel: false,
      tabStyle: {
        flex: 0,
        width: 65
      },
      style: {
        justifyContent: 'center'
      }
    }
  }
);
