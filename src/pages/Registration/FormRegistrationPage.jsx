import React, { useState } from "react";
import "./FormRegistrationPage.css";
import { Button, Form, Input, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handle_submit_registration } from "redux/middlewares/handle_submit_registration";

const { Title } = Typography;

const FormRegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (value) => {
    dispatch(handle_submit_registration(value));
    form.resetFields();
    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container-form">
      <Title>Форма регистрации пользователя</Title>
      <Form
        autoComplete={"off"}
        form={form}
        className="form-registration"
        name="basic1"
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
            {
              whitespace: true,
            },
            {
              min: 3,
            },
            {
              validator(_, value) {
                return value.includes(" ")
                  ? Promise.reject("Поле 'Username' не должно содержать пробел")
                  : Promise.resolve();
              },
            },
          ]}
          hasFeedback
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
            {
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label={<label className="label">Confirm password</label>}
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              whitespace: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                return !value || getFieldValue("password") === value
                  ? Promise.resolve()
                  : Promise.reject("Two passwords dont confirm");
              },
            }),
          ]}
          hasFeedback
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
