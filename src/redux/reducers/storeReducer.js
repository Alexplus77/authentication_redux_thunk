import {
  ADD_VALUE_USERS,
  ON_REGISTRATION,
  SUBMIT_REGISTRATION,
  SUBMIT_AUTH,
} from "redux/actions/actionTypes";

const initialState = {
  dataNews: [],
  onRegistration: false,
  isAuth: false,
  userRegistration: {},
};
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VALUE_USERS:
      const { name, value } = action.payload;
      return {
        ...state,
        userRegistration: { ...state.userRegistration, [name]: value },
      };
    default:
      return state;
  }
};

export { storeReducer };
