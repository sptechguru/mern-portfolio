import React from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginForm.css";
import { hideLoading, showLoading } from "../../../redux/rootSlice";
import axios from "axios";
import { PORTFOLIOPOINTS } from "../../../Api/Endpoints";
import { useDispatch } from "react-redux";
const { Title } = Typography;
import { useNavigate } from "react-router-dom";
import HeroBgAnimation from "../../HeroBgAnimation";
import StyledStarsCanvas from "../../canvas/Stars";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(`${PORTFOLIOPOINTS.ApiBaseUrl}login`, {
        ...values,
      });
      dispatch(hideLoading());
      if (response.data.success) {
        localStorage.setItem("USER", JSON.stringify(response.data));
        navigate("/admin-dashboard");
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <StyledStarsCanvas />
        <HeroBgAnimation />
        <Card className="login-card">
          <Title level={2} className="title_gradient_text">
            Super Admin Login
          </Title>
          <Form name="login" onFinish={onFinish} layout="vertical">
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                className="btn_login"
                htmlType="submit"
                block
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
