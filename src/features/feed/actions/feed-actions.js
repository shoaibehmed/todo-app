// action types
export const feedActionTypes = {
  SET_FEED: 'FEED_SET_FEED'
};

// action creators

export const setFeed = value => ({
  type: feedActionTypes.SET_FEED,
  payload: value
});
