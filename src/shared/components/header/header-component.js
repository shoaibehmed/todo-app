import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, Text } from 'react-native';

const HeaderComponent = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { height: 90, backgroundColor: 'rgb(76,217,100)', justifyContent: 'flex-end' },
  title: { margin: 10, marginHorizontal: 15, color: '#fff', fontSize: 30 }
});

HeaderComponent.propTypes = {
  title: PropTypes.string
};

export default HeaderComponent;
