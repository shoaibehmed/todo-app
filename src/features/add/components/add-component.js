import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  ScrollView
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import ButtonComponent from './../../../shared/components/button/button-component';

class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
  }

  handlePicker(visibility) {
    this.setState({ ...this.state, visibility });
  }

  handleDatePicked(date) {
    this.props.onChange('dueDate', date);
  }

  handleBadgePress(active) {
    this.props.onChange('badge', active);
  }

  render() {
    const { formData, onChange, onAdd, colors } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps={'handled'}>
        <View style={styles.inputView}>
          <TextInput
            multiline={true}
            placeholder={'What do you need to do?'}
            style={{ height: '100%', textAlignVertical: 'top' }}
            value={formData.message}
            onChangeText={text => onChange('message', text)}
          />
        </View>
        <TouchableOpacity onPress={() => this.handlePicker(true)} style={{ marginVertical: 15 }}>
          <View style={styles.dateView} pointerEvents={'none'}>
            <Text style={{ color: '#999' }}>
              {formData.dueDate
                ? moment(formData.dueDate).format('MMMM Do YYYY, h:mm a')
                : 'When is it due ?'}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.badgeContainer}>
          {Object.keys(colors).map(key => {
            const item = colors[key];
            return (
              <TouchableWithoutFeedback key={key} onPress={() => this.handleBadgePress(key)}>
                <View
                  style={[
                    styles.badgeView,
                    {
                      backgroundColor: item,
                      opacity: key == formData.badge ? 1 : 0.5
                    }
                  ]}
                />
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <ButtonComponent title={'Add'} onPress={onAdd} />
        <DateTimePicker
          isVisible={this.state.visibility}
          onConfirm={this.handleDatePicked.bind(this)}
          onCancel={() => this.handlePicker(false)}
          onHideAfterConfirm={() => this.handlePicker(false)}
          mode={'datetime'}
          is24Hour={false}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', minHeight: '100%', margin: 10 },
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
    borderColor: '#dcdcdc'
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    alignItems: 'center'
  },
  badgeView: { height: 50, width: 50, borderRadius: 25, marginHorizontal: 3 }
});

AddComponent.propTypes = {
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  colors: PropTypes.object,
  formData: PropTypes.object
};

export default AddComponent;
