// action types
export const loginActionTypes = {
  SET_USER: 'LOGIN_SET_USER',
  SET_FORM_DATA: 'LOGIN_SET_FORM_DATA'
};

// action creators
export const setUser = user => ({
  type: loginActionTypes.SET_USER,
  payload: user
});

export const setFormData = (key, value) => ({
  type: loginActionTypes.SET_FORM_DATA,
  payload: { key, value }
});
