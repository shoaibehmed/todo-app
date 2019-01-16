import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ProfileComponent = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View pointerEvents={'none'} style={styles.btnView}>
          <Text style={{ color: 'rgb(255,59,48)' }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-end' },
  btnView: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'rgb(255,59,48)',
    borderRadius: 3
  }
});

export default ProfileComponent;
