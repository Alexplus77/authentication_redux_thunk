import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FormEntries } from "components/Form";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { FormAuthUser } from "components/FormAuthUser";

const { Title } = Typography;

const Header = () => {
  const style = {
    color: "white",
  };
  const { isAuth } = useSelector((state) => state.storeReducer);
  return (
    <div className="header-container">
      <Title style={style}>
        <NavLink style={{ color: "white" }} to={"/"}>
          Neto Social
        </NavLink>
      </Title>
      {isAuth ? <FormAuthUser /> : <FormEntries />}
    </div>
  );
};

export { Header };
