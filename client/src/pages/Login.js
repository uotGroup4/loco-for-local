import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Link } from "react-router-dom";

import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    //try {
    //const { data } = await login({
    //variables: { ...formState },
    //});
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token


      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    const handleChange = event => {
      const { name, password } = event.target;
      setFormState({
        ...formState,
        [email]: value,
        [password]: value,
      });
    };

    /* return (
      <div>
        <form onSubmit={handleFormSubmit}>
          {/* input - onChange={handleChange} goes in here */} /*
         </form>
        {error && <div>Login failed</div>}
      </div>
    );
  };

  export default Login; */
  return (
    <div>
      <Container>
        <div className='heading'>
          <Link to="/signup">
            ← Go to Signup

          </Link>
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
    </div >
  );
}

export default Login;