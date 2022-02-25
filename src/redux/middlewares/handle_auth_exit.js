import { auth_exit } from "redux/actions/createActions";

export const handle_auth_exit = () => (dispatch) => {
  dispatch(auth_exit());
  localStorage.removeItem("token");
};
