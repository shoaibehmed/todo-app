import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import ButtonComponent from './../../../shared/components/button/button-component';

class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      date: '',
      active: 1,
      colors: [
        { id: 1, color: 'rgb(74,144,226)' },
        { id: 2, color: 'rgb(223,244,199)' },
        { id: 3, color: 'rgb(243,191,198)' },
        { id: 4, color: 'rgb(238,195,247)' },
        { id: 5, color: 'rgb(252,232,200)' }
      ]
    };
  }

  handlePicker(visibility) {
    this.setState({ ...this.state, visibility });
  }

  handleDatePicked(date) {
    this.setState({ ...this.state, date: date });
  }

  handleBadgePress(active) {
    this.setState({ ...this.state, active });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            multiline={true}
            placeholder={'What do you need to do?'}
            style={{ height: '100%', textAlignVertical: 'top' }}
          />
        </View>
        <TouchableOpacity onPress={() => this.handlePicker(true)}>
          <View style={styles.dateView} pointerEvents={'none'}>
            <Text style={{ color: '#999' }}>
              {this.state.date
                ? moment(this.state.date).format('MMMM Do YYYY, h:mm a')
                : 'When is it due ?'}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.badgeContainer}>
          {this.state.colors.map(item => (
            <TouchableOpacity key={item.id} onPress={() => this.handleBadgePress(item.id)}>
              <View
                style={[
                  styles.badgeView,
                  {
                    backgroundColor: item.color,
                    opacity: item.id === this.state.active ? 1 : 0.5
                  }
                ]}
                pointerEvents={'none'}
              />
            </TouchableOpacity>
          ))}
        </View>
        <ButtonComponent title={'Add'} />
        <DateTimePicker
          isVisible={this.state.visibility}
          onConfirm={this.handleDatePicked.bind(this)}
          onCancel={() => this.handlePicker(false)}
          onHideAfterConfirm={() => this.handlePicker(false)}
          mode={'datetime'}
          is24Hour={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1, margin: 10 },
  inputView: {
    padding: 10,
    paddingVertical: 0,
    borderRadius: 3,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    height: 100
  },
  dateView: {
    padding: 15,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#dcdcdc',
    marginVertical: 15
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    alignItems: 'center'
  },
  badgeView: { height: 50, width: 50, borderRadius: 25, marginHorizontal: 3 }
});

export default AddComponent;
