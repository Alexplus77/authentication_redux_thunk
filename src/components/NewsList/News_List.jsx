import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_news } from "redux/actions/createActions";
import "./News_List.css";
import { Card, Button } from "antd";

const News_List = () => {
  const dispatch = useDispatch();

  const { dataNews } = useSelector((state) => state.storeReducer);
  const defaultImage =
    "https://gamemag.ru/images/cache/News/News164452/d56285709e-2_1390x600.jpg";
  console.log(dataNews);
  return (
    <div className="container-news">
      {dataNews.map(
        ({ urlToImage, title, id, description, url, publishedAt }) => (
          <Card
            key={id}
            style={{ width: 400 }}
            cover={<img alt="example" src={urlToImage || defaultImage} />}
          >
            <strong>{title}</strong>
            <p> {description}</p>
            <small>Дата публикации: {publishedAt}</small>
            <Button type="primary" href={url} style={{ marginLeft: "70%" }}>
              Продробнее
            </Button>
          </Card>
        )
      )}
    </div>
  );
};

export { News_List };
