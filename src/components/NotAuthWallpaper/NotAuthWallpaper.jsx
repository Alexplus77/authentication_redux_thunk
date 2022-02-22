import React from "react";
import "./NotAuthWallpaper.css";
import { Typography } from "antd";
const { Title } = Typography;

const NotAuthWallpaper = () => {
  return (
    <div className="content-mainPage">
      <div className="title-container">
        <Title style={{ fontSize: "6em" }}>Neto Social</Title>
        <Title level={3}>FaceBook and VK killer.</Title>
      </div>
      <img
        className="img-mainPage"
        src={"https://i.ibb.co/cCykn4G/pngegg.png"}
        alt={"photo"}
      />
    </div>
  );
};
export { NotAuthWallpaper };
