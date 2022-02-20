import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./FormEntries.css";

const FormEntries = () => {
  const isAuth = true;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      className={isAuth ? "form-auth" : "form-registration"}
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
          Submit
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
