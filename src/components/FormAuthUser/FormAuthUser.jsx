import React from "react";
import "./FormAuthUser.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handle_auth_exit } from "redux/middlewares/handle_auth_exit";

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
        <Link to={"/"}>Logout</Link>
      </Button>
    </div>
  );
};

export { FormAuthUser };
