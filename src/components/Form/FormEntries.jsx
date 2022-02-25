import React from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./FormEntries.css";
import { handle_auth_user } from "redux/middlewares/handle_auth_user";

const FormEntries = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(handle_auth_user(values));
    form.resetFields();
    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      className="form-auth"
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
