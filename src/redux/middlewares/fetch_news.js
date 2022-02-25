import axios from "axios";
import { errorModal } from "../../components/Error/Error";
import { handle_auth_exit } from "./handle_auth_exit";
import { on_loading, state_fetch_news } from "redux/actions/createActions";

export const fetch_news = () => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch(on_loading());
  axios
    .get(process.env.REACT_APP_NEWS, {
      headers: { Authorisation: `Bearer ${token}` },
    })
    .then(({ data }) => dispatch(state_fetch_news(data)))
    .catch((e) => {
      errorModal(e);
      handle_auth_exit();
    });
};
