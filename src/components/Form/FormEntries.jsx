import React from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./FormEntries.css";
import { handle_auth_user, fetch_news } from "redux/actions/createActions";

const FormEntries = () => {
  const { onRegistration } = useSelector((state) => state.storeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(handle_auth_user(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      className="form-auth"
      name="basic"
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
        <Button type="primary" htmlType="submit">
          LogIn
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="primary">
          <Link to={"/registration"}>Registration</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

export { FormEntries };
