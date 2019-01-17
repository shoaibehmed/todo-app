import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';

const ListItemComponent = props => {
  const { item, colors } = props;

  const currentDate = new Date();
  const dueDate = new Date(item.dueDate);

  return (
    <View style={styles.view}>
      <View style={[styles.badge, { backgroundColor: colors[item.badge] }]} />
      <View style={{ marginHorizontal: 15 }}>
        <Text style={currentDate <= dueDate ? styles.due : styles.pastDue}>{item.message}</Text>
        <Text style={{ color: '#555', fontSize: 12, marginTop: 5 }}>
          Due {moment(dueDate).fromNow()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingBottom: 10 },
  title: { margin: 10, marginHorizontal: 15, color: '#fff', fontSize: 30 },
  badge: { height: 18, width: 18, borderRadius: 9 },
  due: { color: '#000', fontSize: 16 },
  pastDue: {
    color: '#555',
    fontSize: 16,
    textDecorationLine: 'line-through'
  }
});

ListItemComponent.propTypes = {
  item: PropTypes.object,
  colors: PropTypes.object
};

export default ListItemComponent;
