import axios from "axios";
import { errorModal } from "components/Error/Error";
import { on_loading, submit_auth } from "redux/actions/createActions";

export const handle_auth_user = (data) => (dispatch) => {
  dispatch(on_loading());
  axios
    .post(process.env.REACT_APP_AUTH, data)
    .then(({ data }) => {
      dispatch(submit_auth(data));
      localStorage.setItem("token", data.token);
    })
    .catch((e) => {
      errorModal(e);
    });
};
