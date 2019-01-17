import { createStore, combineReducers } from 'redux';

// reducers
import LoginReducer from './login/login-reducer';

const reducers = combineReducers({
  login: LoginReducer
});

export default function() {
  return createStore(reducers);
}
