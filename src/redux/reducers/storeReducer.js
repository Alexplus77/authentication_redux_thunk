import {
  ON_LOADING,
  SUBMIT_AUTH,
  EXIT_AUTH,
  FETCH_NEWS,
  FETCH_NEWS_ITEM,
} from "redux/actions/actionTypes";

const initialState = {
  dataNews: [],
  dataItemNews: {},
  isAuth: false,
  authUser: {},
  loading: false,
  error: null,
};
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOADING:
      return { ...state, loading: true };
    case SUBMIT_AUTH:
      const data = action.payload;
      return {
        ...state,
        authUser: data,
        isAuth: true,
        dataNews: data.news,
        loading: false,
      };
    case FETCH_NEWS:
      const { news, user } = action.payload;
      return {
        ...state,
        isAuth: true,
        dataNews: news,
        authUser: user,
        loading: false,
      };
    case EXIT_AUTH:
      return { ...state, authUser: {}, isAuth: false, loading: false };
    case FETCH_NEWS_ITEM:
      const { newsItem, user: userFetch } = action.payload;
      return {
        ...state,
        dataItemNews: newsItem,
        authUser: userFetch,
        isAuth: true,
        loading: false,
      };

    default:
      return state;
  }
};

export { storeReducer };
