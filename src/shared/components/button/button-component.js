import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.btnView} pointerEvents={'none'}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: 'rgb(76,217,100)',
    padding: 15,
    borderRadius: 3,
    marginTop: 15
  }
});

ButtonComponent.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};

export default ButtonComponent;
