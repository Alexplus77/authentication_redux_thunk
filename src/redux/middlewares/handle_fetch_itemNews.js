import axios from "axios";
import { handle_auth_exit } from "./handle_auth_exit";
import { errorModal } from "../../components/Error/Error";
import { fetch_news_item, on_loading } from "../actions/createActions";

export const handle_fetch_itemNews = (id) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch(on_loading());
  axios
    .get(`${process.env.REACT_APP_NEWS}${id}`, {
      headers: { Authorisation: `Bearer ${token}` },
    })
    .then(({ data }) => {
      dispatch(fetch_news_item(data));
    })
    .catch((e) => {
      handle_auth_exit();
      errorModal(e);
    });
};
