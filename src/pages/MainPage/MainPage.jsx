import React from "react";
import "./MainePage.css";
import { Typography } from "antd";
const { Title } = Typography;

const MainPage = () => {
  return (
    <div className="mainPage-container">
      <div className="title-continer">
        <Title style={{ fontSize: "6em" }}>Neto Social</Title>
        <Title level={3}>FaceBook and VK killer.</Title>
      </div>
    </div>
  );
};
export { MainPage };
