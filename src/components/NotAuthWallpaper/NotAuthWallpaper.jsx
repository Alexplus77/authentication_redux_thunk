import React from "react";
import "./NotAuthWallpaper.css";
import { Typography } from "antd";
const { Title } = Typography;

const NotAuthWallpaper = () => {
  return (
    <div className="content-mainPage">
      <div className="title-container">
        <Title style={{ fontSize: "6em", height: "30px" }}>Neto Social</Title>
        <Title style={{ height: "30px" }} level={3}>
          FaceBook and VK killer.
        </Title>
      </div>
    </div>
  );
};
export { NotAuthWallpaper };
