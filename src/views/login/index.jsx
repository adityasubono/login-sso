import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {Form, Icon, Input, Button, message, Spin} from "antd";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import "./index.less";
import { login, getUserInfo } from "../../store/actions";

const Login = (props) => {
  const { form, token, login, getUserInfo } = props;
  const { getFieldDecorator } = form;

  const [loading, setLoading] = useState(false);

  const handleLogin = (username, password) => {
    setLoading(true);
    login(username, password)
      .then((data) => {
        message.success("Welcome");
        handleUserInfo(data.token);
      })
      .catch((error) => {
        setLoading(false);
        message.error(error);
      });
  };

  // 获取用户信息
  const handleUserInfo = (token) => {
    getUserInfo(token)
      .then((data) => {})
      .catch((error) => {
        message.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        handleLogin(username, password);
      } else {
        console.log("Error...!");
      }
    });
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <DocumentTitle title={"Login"}>
      <div className="login-container">
        <Form onSubmit={handleSubmit} className="content">
          <div className="title">
            <h2>Login</h2>
          </div>
          <Spin spinning={loading} tip="Loading...">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "Username Wrong",
                  },
                ],
                initialValue: "admin", // 初始值
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "Password Wrong",
                  },
                ],
                initialValue: "123456", // 初始值
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log In
              </Button>
            </Form.Item>
            <Form.Item style={{fontSize: "12px"}}>
              <p>Username : teacher Password : teacher
                Username : admission Password : admission
                Username : admission Password : admission
                Username : student Password : student
                Username : librarian Password : librarian
                Username : principal Password : principal
                Username : parent Password : parent
              </p>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};

const WrapLogin = Form.create()(Login);

export default connect((state) => state.user, { login, getUserInfo })(WrapLogin);
