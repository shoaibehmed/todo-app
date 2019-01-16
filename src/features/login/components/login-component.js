import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginComponent = props => {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={styles.container}>
      <View style={styles.logoView}>
        <MCIcon name={'marker-check'} size={100} color={'rgb(76,217,100)'} />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.text}>Todo</Text>
        <View>
          <View style={styles.inputView}>
            <TextInput placeholder={'Name'} />
          </View>
          <TouchableOpacity>
            <View style={styles.btnView} pointerEvents={'none'}>
              <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#fff'
  },
  logoView: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  text: {
    fontSize: 20,
    width: 40,
    textAlign: 'center',
    color: '#000',
    alignSelf: 'center'
  },
  inputView: {
    borderColor: '#efefef',
    borderRadius: 3,
    borderWidth: 1,
    padding: 10,
    paddingVertical: 0
  },
  btnView: {
    backgroundColor: 'rgb(76,217,100)',
    padding: 15,
    borderRadius: 3,
    marginTop: 15
  },
  bottomView: {
    width: '100%',
    padding: 15,
    paddingTop: 0,
    justifyContent: 'space-between',
    flex: 1
  }
});

export default LoginComponent;
