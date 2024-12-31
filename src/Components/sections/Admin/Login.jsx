import React from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginForm.css";
import { hideLoading, showLoading } from "../../../redux/rootSlice";
import axios from "axios";
import { PORTFOLIOPOINTS } from "../../../Api/Endpoints";
import { useDispatch } from "react-redux";
const { Title } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log("Received values:", values);
    try {
      dispatch(showLoading());
      const response = await axios.post(`${PORTFOLIOPOINTS.ApiBaseUrl}login`, {
        ...values,
      });
      console.log("Login data....", response);
      dispatch(hideLoading());
      if (response.data.success) {
        localStorage.setItem("USER", JSON.stringify(response.data));
        window.location.href = "/admin-dashbord";
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Title level={2} className="login-title">
          Super Admin Login
        </Title>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
