import {
  ADD_VALUE_USERS,
  ON_REGISTRATION,
  SUBMIT_REGISTRATION,
  SUBMIT_AUTH,
} from "./actionTypes";
import axios from "axios";

// export const add_value_users = (name, value) => ({
//   type: ADD_VALUE_USERS,
//   payload: { name, value },
// });

export const handle_submit_registration = (data) => (dispatch) => {
  axios
    .post("http://localhost:8080/registration", data)
    .then(({ data }) => console.log(data))
    .catch((e) => {
      console.log(e.message);
    });
};
