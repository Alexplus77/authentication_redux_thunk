import { Routes, Route } from "react-router-dom";
import { Layout } from "pages/Layout";
import { FormRegistrationPage } from "pages/Registration";
import { MainPage } from "pages/MainPage";
import { NewsItemPage } from "pages/NewsItemPage";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={"/registration"} element={<FormRegistrationPage />} />
        <Route path={"/newsItem:id"} element={<NewsItemPage />} />
      </Route>
    </Routes>
  );
};

export { Router };
