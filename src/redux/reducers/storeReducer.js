import {
  ADD_VALUE_USERS,
  ON_REGISTRATION,
  SUBMIT_REGISTRATION,
  SUBMIT_AUTH,
  EXIT_AUTH,
} from "redux/actions/actionTypes";

const initialState = {
  dataNews: [],
  onRegistration: false,
  isAuth: false,
  authUser: {},
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
    case SUBMIT_AUTH:
      const data = action.payload;
      return { ...state, authUser: data, isAuth: true };
    case EXIT_AUTH:
      return { ...state, authUser: {}, isAuth: false };
    default:
      return state;
  }
};

export { storeReducer };
