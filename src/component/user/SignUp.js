import React from 'react'
import { Link } from 'react-router-dom';
import { Form,Input,Tooltip,Checkbox,Button} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './SignUp.css'

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

function SignUp() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

    return (
        <div className="SignUpArea">
        <Form
            {...formItemLayout}
            className="signup-form"
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
            <h1 className="signUpText">SignUp</h1>
            <Form.Item
                name="nickname"
                label={
                <span>
                    Nickname&nbsp;
                    <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                    </Tooltip>
                </span>
                }
                rules={[
                {
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true,
                },
                ]}
                >
                <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                {
                    required: true,
                    message: 'Please input your phone number!',
                },
                ]}
            >
                <Input
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

        <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
                },
            }),
            ]}
        >
        <Input.Password />
        </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                {
                    validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                SignUp
                </Button>
                <Link to="/"><p className="goLogin">already account?</p></Link>
            </Form.Item>
        </Form>
        </div>
    )
}

export default SignUp
