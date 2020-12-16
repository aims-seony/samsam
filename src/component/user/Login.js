import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

      return (
        <div className="LoginArea">
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >
            <h1 className="loginText">LOGIN</h1>
            <Form.Item
                name="phone"
                rules={[
                {
                    required: true,
                    message: 'Please input your phone number!',
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link to="/FindPassword"><p className="goFindPassword">Forgot password?</p></Link>
            </Form.Item>
        
            <Form.Item>
                <Link to="/Peed"><Button type="primary" htmlType="submit" className="login-form-button">
                    Login
                </Button></Link>
                <Link to="/SignUp"><p className="goSignUp">register now!</p></Link>
            </Form.Item>
            </Form>
        </div>
      );
}

export default Login
