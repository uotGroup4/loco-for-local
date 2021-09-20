import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

function Signup(props) {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password, firstName: formState.firstName, lastName: formState.lastName
      }

    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };





  // use try/catch instead of promises to handle errors
  /*try {
    // execute addUser mutation and pass in variable data from form
    const { data } = await addUser({
      variables: { ...formState },
    });

    Auth.login(data.addUser.token);
  } catch (e) {
    console.error(e);
  }
}; */

  return (
    <div className="heading">
      <Link to="/login">
        ← Go to Login
    </Link>

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
