import React from "react";
import "./FormRegistrationPage.css";
import { FormEntries } from "components/Form";
import { Typography } from "antd";
const { Title } = Typography;

const FormRegistrationPage = () => {
  return (
    <div className="container-form">
      <Title>Форма регистрации пользователя</Title>
      <FormEntries />
    </div>
  );
};

export { FormRegistrationPage };
