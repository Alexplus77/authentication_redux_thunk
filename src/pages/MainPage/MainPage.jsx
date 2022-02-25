import React, { useEffect } from "react";
import "./MainePage.css";
import { NotAuthWallpaper } from "components/NotAuthWallpaper";
import { News_List_Ant } from "components/News_List_Ant";
import { useSelector, useDispatch } from "react-redux";
import { fetch_news } from "redux/middlewares/fetch_news";

const MainPage = () => {
  const { isAuth } = useSelector((state) => state.storeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_news());
  }, [dispatch]);

  return (
    <div className="mainPage-container">
      {isAuth ? <News_List_Ant /> : <NotAuthWallpaper />}
    </div>
  );
};
export { MainPage };
