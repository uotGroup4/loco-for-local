import React from 'react';
import './style.css';
import { Form, Input, Button } from 'antd';
import { Container } from '@material-ui/core';

function Signup() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Container>
        <div className='heading'>
          <h2 style={{ color: '#fff' }}>Signup</h2>
        </div>
        <Form
          name='basic'
          style={{ marginTop: '3rem' }}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <p style={{ textAlign: 'center' }}>Name</p>

          <Form.Item
            name='username'
            wrapperCol={{}}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <p style={{ textAlign: 'center' }}>Email</p>

          <Form.Item
            name='email'
            wrapperCol={{}}
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <p style={{ textAlign: 'center' }}>Password</p>

          <Form.Item
            name='password'
            wrapperCol={{}}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <p style={{ textAlign: 'center' }}>Re-Enter Password</p>

          <Form.Item
            name='password2'
            wrapperCol={{}}
            rules={[
              {
                required: true,
                message: 'Password does not match!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 11,
              span: 16,
            }}
          >
            <Button type='danger' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </div>
  );
}

export default Signup;
