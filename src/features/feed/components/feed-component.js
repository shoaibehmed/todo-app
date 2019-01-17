import React from 'react';
import PropTypes from 'prop-types';

import { ScrollView, StyleSheet } from 'react-native';

import ListItem from './../../../shared/components/list-item/list-item-component';

const FeedComponent = props => {
  const { feed, colors } = props;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {feed.map((item, index) => (
        <ListItem key={index} item={item} colors={colors} />
      ))}
    </ScrollView>
  );
};

FeedComponent.propTypes = {
  feed: PropTypes.array,
  colors: PropTypes.object
};

const styles = StyleSheet.create({
  container: { minHeight: '100%', paddingVertical: 10 }
});

export default FeedComponent;
