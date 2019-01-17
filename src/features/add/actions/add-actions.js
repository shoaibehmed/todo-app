// action types
export const addActionTypes = {
  SET_FORM_DATA: 'ADD_SET_FORM_DATA',
  CLEAR_FORM_DATA: 'ADD_CLEAR_FORM_DATA'
};

// action creators

export const setFormData = (key, value) => ({
  type: addActionTypes.SET_FORM_DATA,
  payload: { key, value }
});

export const clearFormData = () => ({
  type: addActionTypes.CLEAR_FORM_DATA
});
