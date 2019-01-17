import { loginActionTypes } from './../../features/login/actions/login-actions';

const formData = {
  name: ''
};

const initialState = {
  user: null,
  formData: formData
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActionTypes.SET_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    case loginActionTypes.SET_FORM_DATA: {
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.key]: action.payload.value
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default LoginReducer;
