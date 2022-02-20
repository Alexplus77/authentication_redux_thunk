import { Routes, Route } from "react-router-dom";
import { Layout } from "pages/Layout";
import { FormRegistrationPage } from "pages/Registration";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<FormRegistrationPage />} />
      </Route>
    </Routes>
  );
};

export { Router };
