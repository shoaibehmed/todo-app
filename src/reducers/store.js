import { createStore, combineReducers } from 'redux';

// actions
import { loginActionTypes } from './../features/login/actions/login-actions';

// reducers
import LoginReducer from './login/login-reducer';
import AddReducer from './add/add-reducer';
import FeedReducer from './feed/feed-reducer';

const appReducer = combineReducers({
  login: LoginReducer,
  add: AddReducer,
  feed: FeedReducer
});

const rootReducer = (state, action) => {
  if (action.type === loginActionTypes.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default function() {
  return createStore(rootReducer);
}
