import React from 'react';
import PropTypes from 'prop-types';

import { createBottomTabNavigator } from 'react-navigation';

import IIcons from 'react-native-vector-icons/Ionicons';
import SLIcons from 'react-native-vector-icons/SimpleLineIcons';

// containers
import Feed from './../../features/feed/container/feed-container';
import Profile from './../../features/profile/container/profile-container';

export default createBottomTabNavigator(
  {
    Feed: { screen: Feed },
    Add: { screen: Feed },
    Profile: { screen: Feed }
  },
  {
    initialRouteName: 'Profile',
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
