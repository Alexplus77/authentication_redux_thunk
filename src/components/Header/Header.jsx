import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FormEntries } from "components/Form";
import { Typography } from "antd";
const { Title } = Typography;

const Header = () => {
  const style = {
    color: "white",
  };
  return (
    <div className="header-container">
      <Title style={style}>
        <NavLink style={{ color: "white" }} to={"/"}>
          Neto Social
        </NavLink>
      </Title>
      <FormEntries />
    </div>
  );
};

export { Header };
