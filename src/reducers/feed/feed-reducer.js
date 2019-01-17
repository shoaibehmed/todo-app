import { feedActionTypes } from './../../features/feed/actions/feed-actions';

const initialState = {
  feed: [],
  colors: {
    1: 'rgb(74,144,226)',
    2: 'rgb(223,244,199)',
    3: 'rgb(243,191,198)',
    4: 'rgb(238,195,247)',
    5: 'rgb(252,232,200)'
  }
};

const FeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case feedActionTypes.SET_FEED: {
      return {
        ...state,
        feed: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default FeedReducer;
