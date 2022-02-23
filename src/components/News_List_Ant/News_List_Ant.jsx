import { List, Divider, Typography } from "antd";
import React from "react";
import "./News_List_Ant.css";
import { useSelector } from "react-redux";

const News_List_Ant = () => {
  const { dataNews } = useSelector((state) => state.storeReducer);
  const defaultImage =
    "https://gamemag.ru/images/cache/News/News164452/d56285709e-2_1390x600.jpg";

  return (
    <div className="list-container">
      <Divider orientation="left">
        <Typography.Title> Последние новости</Typography.Title>
      </Divider>
      <List
        style={{ background: "white", width: "700px", padding: "10px" }}
        itemLayout="horizontal"
        dataSource={dataNews}
        renderItem={(item) => (
          <List.Item>
            <img
              alt={"image"}
              src={item.urlToImage || defaultImage}
              width={200}
              style={{ paddingRight: "10px" }}
            />
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export { News_List_Ant };
