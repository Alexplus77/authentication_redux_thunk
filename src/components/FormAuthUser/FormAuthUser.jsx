import React from "react";
import "./FormAuthUser.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handle_auth_exit } from "redux/actions/createActions";

const FormAuthUser = () => {
  const { authUser } = useSelector((state) => state.storeReducer);
  const dispatch = useDispatch();
  const handle_logout = () => dispatch(handle_auth_exit());
  const { username, avatar } = authUser;
  return (
    <div className="form-authUser-container">
      <i className="auth-username">Hello, {username}</i>
      <img src={avatar} className="img-avatar" />
      <Button onClick={handle_logout} danger>
        Logout
      </Button>
    </div>
  );
};

export { FormAuthUser };
