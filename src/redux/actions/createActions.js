import {
  ADD_VALUE_USERS,
  ON_REGISTRATION,
  SUBMIT_REGISTRATION,
  SUBMIT_AUTH,
  EXIT_AUTH,
  FETCH_NEWS,
  FETCH_NEWS_ITEM,
} from "./actionTypes";
import axios from "axios";

export const handle_submit_registration = (data) => (dispatch) => {
  axios
    .post("http://localhost:8080/registration", data)
    .then(({ data }) => console.log(data))
    .catch((e) => {
      console.log(e.message);
    });
};
export const submit_auth = (data) => ({
  type: SUBMIT_AUTH,
  payload: data,
});
export const handle_auth_user = (data) => (dispatch) => {
  axios
    .post("http://localhost:8080/auth", data)
    .then(({ data }) => {
      dispatch(submit_auth(data));
      localStorage.setItem("token", data.token);
    })
    .catch((e) => console.log(e));
};
export const auth_exit = () => ({
  type: EXIT_AUTH,
});
export const handle_auth_exit = () => (dispatch) => {
  dispatch(auth_exit());
  localStorage.removeItem("token");
};
export const state_fetch_news = (dataNews) => ({
  type: FETCH_NEWS,
  payload: dataNews,
});
export const fetch_news = () => (dispatch) => {
  let token = localStorage.getItem("token");
  axios
    .get("http://localhost:8080/news", {
      headers: { Authorisation: `Bearer ${token}` },
    })
    .then(({ data }) => dispatch(state_fetch_news(data)))
    .catch((e) => {
      console.log("error fetchNews", e);
      handle_auth_exit();
    });
};
export const fetch_news_item = (dataItemNews) => ({
  type: FETCH_NEWS_ITEM,
  payload: dataItemNews,
});
export const handle_fetch_itemNews = (id) => (dispatch) => {
  let token = localStorage.getItem("token");
  axios
    .get(`http://localhost:8080/news${id}`, {
      headers: { Authorisation: `Bearer ${token}` },
    })
    .then(({ data }) => {
      dispatch(fetch_news_item(data));
    })
    .catch((e) => console.log(e));
};
