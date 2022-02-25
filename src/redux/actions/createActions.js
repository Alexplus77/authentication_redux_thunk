import {
  SUBMIT_AUTH,
  EXIT_AUTH,
  FETCH_NEWS,
  FETCH_NEWS_ITEM,
  ON_LOADING,
} from "./actionTypes";

export const submit_auth = (data) => ({
  type: SUBMIT_AUTH,
  payload: data,
});

export const auth_exit = () => ({
  type: EXIT_AUTH,
});

export const state_fetch_news = (dataNews) => ({
  type: FETCH_NEWS,
  payload: dataNews,
});

export const fetch_news_item = (dataItemNews) => ({
  type: FETCH_NEWS_ITEM,
  payload: dataItemNews,
});

export const on_loading = () => ({
  type: ON_LOADING,
});
