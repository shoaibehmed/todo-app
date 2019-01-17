import { addActionTypes } from './../../features/add/actions/add-actions';

const formData = {
  message: '',
  dueDate: '',
  badge: 1
};

const initialState = {
  formData: formData
};

const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case addActionTypes.SET_FORM_DATA: {
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.key]: action.payload.value
        }
      };
    }
    case addActionTypes.CLEAR_FORM_DATA: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default AddReducer;
