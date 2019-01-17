import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, Text, Animated, PanResponder, Dimensions, Alert } from 'react-native';
import moment from 'moment';
import IIcon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;

class ListItemComponent extends Component {
  constructor(props) {
    super(props);

    this.gestureDelay = -35;
    const position = new Animated.ValueXY();
    this.completed = props.item.item.completed;

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderMove: (evt, gestureState) => {
        if (!this.completed && gestureState.dx > 35) {
          let newX = gestureState.dx + this.gestureDelay;
          position.setValue({ x: newX, y: 0 });
        }
        if (gestureState.dx < -35) {
          let newX = gestureState.dx - this.gestureDelay;
          position.setValue({ x: newX, y: 0 });
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 150) {
          if (!this.completed) {
            Animated.timing(this.state.position, {
              toValue: { x: 0, y: 0 },
              duration: 150
            }).start(() => {
              props.completeTodo(props.item.index);
            });
          }
        } else if (gestureState.dx > -150) {
          Animated.timing(this.state.position, {
            toValue: { x: 0, y: 0 },
            duration: 150
          }).start();
        } else if (gestureState.dx < -150) {
          Alert.alert('Delete Todo', 'Are you sure you want to delete ?', [
            {
              text: 'Cancel',
              onPress: () =>
                Animated.timing(this.state.position, {
                  toValue: { x: 0, y: 0 },
                  duration: 150
                }).start()
            },
            {
              text: 'OK',
              onPress: () =>
                Animated.timing(this.state.position, {
                  toValue: { x: -width, y: 0 },
                  duration: 150
                }).start(() => {
                  props.deleteTodo(props.item.index);
                })
            }
          ]);
        }
      }
    });

    this.state = { position };
  }

  render() {
    const { colors } = this.props;
    const { item } = this.props.item;
    this.completed = item.completed;

    const currentDate = new Date();
    const dueDate = new Date(item.dueDate);

    return (
      <View style={{ marginLeft: -width, marginRight: -width }}>
        <Animated.View style={[this.state.position.getLayout()]} {...this.panResponder.panHandlers}>
          <View style={styles.absoluteCellLeft}>
            <Text style={{ textAlign: 'right', color: '#fff' }}>Complete</Text>
          </View>
          <View style={styles.absoluteCellRight}>
            <Text style={{ textAlign: 'left', color: '#fff' }}>Delete</Text>
          </View>
          <View style={styles.view}>
            <View style={[styles.badge, { backgroundColor: colors[item.badge] }]} />
            <View style={{ marginHorizontal: 15 }}>
              <Text style={currentDate <= dueDate ? styles.due : styles.pastDue}>
                {item.message}
              </Text>
              <Text style={styles.dueDate}>Due {moment(dueDate).fromNow()}</Text>
            </View>
            {item.completed && (
              <View style={styles.completedView}>
                <IIcon name={'ios-checkmark-circle'} size={20} color={'rgb(76,217,100)'} />
              </View>
            )}
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
    marginLeft: width,
    marginRight: width,
    backgroundColor: '#fff'
  },
  title: { margin: 10, marginHorizontal: 15, color: '#fff', fontSize: 30 },
  badge: { height: 18, width: 18, borderRadius: 9 },
  due: { color: '#000', fontSize: 16 },
  pastDue: {
    color: '#555',
    fontSize: 16,
    textDecorationLine: 'line-through'
  },
  absoluteCellLeft: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: width,
    paddingRight: 20,
    backgroundColor: 'rgb(76,217,100)',
    justifyContent: 'center'
  },
  absoluteCellRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: width,
    paddingLeft: 20,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  dueDate: { color: '#555', fontSize: 12, marginTop: 5 },
  completedView: { flex: 1, alignItems: 'flex-end' }
});

ListItemComponent.propTypes = {
  item: PropTypes.object,
  colors: PropTypes.object,
  completeTodo: PropTypes.func,
  deleteTodo: PropTypes.func
};

export default ListItemComponent;
