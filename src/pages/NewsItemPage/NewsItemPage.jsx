import React, { useEffect } from "react";
import "./NewsItemPage.css";
import { useParams, Link } from "react-router-dom";
import { Button, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { handle_fetch_itemNews } from "redux/actions/createActions";

const NewsItemPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { dataItemNews } = useSelector((state) => state.storeReducer);
  useEffect(() => {
    dispatch(handle_fetch_itemNews(id));
  }, [dispatch]);
  const { urlToImage, title, description, url } = dataItemNews;

  const defaultImage =
    "https://gamemag.ru/images/cache/News/News164452/d56285709e-2_1390x600.jpg";
  return (
    <Card
      key={id}
      style={{
        width: 650,
        marginLeft: "25%",
        marginTop: "10px",
        marginBottom: "10px",
      }}
      cover={
        <img
          style={{ height: "320px" }}
          alt="example"
          src={urlToImage || defaultImage}
        />
      }
    >
      <strong>{title}</strong>
      <p> {description}</p>
      <div className="btn-news-item">
        <Button type="primary">
          <Link to={"/"}>Назад</Link>
        </Button>
        <Button type="primary" href={url}>
          Продробнее
        </Button>
      </div>
    </Card>
  );
};

export { NewsItemPage };
