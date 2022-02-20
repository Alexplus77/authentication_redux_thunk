import React from "react";
import "./FormRegistrationPage.css";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  add_value_users,
  handle_submit_registration,
} from "redux/actions/createActions";

const { Title } = Typography;

const FormRegistrationPage = () => {
  const dispatch = useDispatch();
  const { userRegistration } = useSelector((state) => state.storeReducer);
  const onFieldChange = (allFields) =>
    allFields.map((elem) => dispatch(add_value_users(elem.name, elem.value)));

  const onFinish = (values) => {
    dispatch(handle_submit_registration(values));
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log(userRegistration);
  return (
    <div className="container-form">
      <Title>Форма регистрации пользователя</Title>
      <Form
        onFieldsChange={(_, allFields) => onFieldChange(allFields)}
        className="form-registration"
        name="basic1"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<label className="label">Username</label>}
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<label className="label">Password</label>}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <div className="btn-registration">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="primary">
              <Link to={"/"}>Exit</Link>
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export { FormRegistrationPage };
