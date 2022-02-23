import {
  ADD_VALUE_USERS,
  ON_REGISTRATION,
  SUBMIT_REGISTRATION,
  SUBMIT_AUTH,
  EXIT_AUTH,
  FETCH_NEWS,
  FETCH_NEWS_ITEM,
} from "redux/actions/actionTypes";

const initialState = {
  dataNews: [],
  dataItemNews: {},
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
      return { ...state, authUser: data, isAuth: true, dataNews: data.news };
    case FETCH_NEWS:
      const { news, user } = action.payload;
      return {
        ...state,
        isAuth: true,
        dataNews: news,
        authUser: user,
      };
    case EXIT_AUTH:
      return { ...state, authUser: {}, isAuth: false };
    case FETCH_NEWS_ITEM:
      const dataItemNews = action.payload;
      return { ...state, dataItemNews: dataItemNews };
    default:
      return state;
  }
};

export { storeReducer };
