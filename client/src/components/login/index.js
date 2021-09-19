import React, { useState } from 'react';
import './style.css';
import { Form, Input, Button } from 'antd';
import { Container } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

function Login() {
  const [login, setlogin] = useState(false);
  const onFinish = (values) => {
    console.log('Success:', values);
    setlogin(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  if (login) {
    return <Redirect to={{ pathname: '/dashboard' }} />;
  }
  return (
    <div>
      <Container>
        <div className='heading'>
          <h2 style={{ color: '#fff' }}>Login</h2>
        </div>
        <Form
          style={{ marginTop: '4rem' }}
          name='basic'
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

export default Login;
