import React from 'react'
import { Link } from 'react-router-dom';
import { Form,Input,Tooltip,Button} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

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

const FindPassword = () => {
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
            <h1 className="FindPasswordText" style={{textAlign:"center"}}>Find Password</h1>
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
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                Find
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default FindPassword
