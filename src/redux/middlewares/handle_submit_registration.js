import axios from "axios";
import { errorModal } from "components/Error/Error";
import { on_loading } from "redux/actions/createActions";

export const handle_submit_registration = (data) => (dispatch) => {
  dispatch(on_loading());
  axios
    .post(process.env.REACT_APP_URL_REGISTRATION, data)
    .then(({ data }) => console.log(data))
    .catch((e) => {
      errorModal(e);
    });
};
