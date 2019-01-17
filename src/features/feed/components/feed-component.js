import React from 'react';
import PropTypes from 'prop-types';

import { FlatList, StyleSheet } from 'react-native';

import ListItem from './../../../shared/components/list-item/list-item-component';

const FeedComponent = props => {
  const { feed, colors, completeTodo, deleteTodo } = props;

  return (
    <FlatList
      data={feed}
      contentContainerStyle={styles.container}
      keyExtractor={(item, index) => `${index}`}
      renderItem={item => (
        <ListItem item={item} colors={colors} completeTodo={completeTodo} deleteTodo={deleteTodo} />
      )}
    />
  );
};

FeedComponent.propTypes = {
  feed: PropTypes.array,
  completeTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  colors: PropTypes.object
};

const styles = StyleSheet.create({
  container: { minHeight: '100%', paddingVertical: 10 }
});

export default FeedComponent;
