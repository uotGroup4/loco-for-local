import React from 'react';
import { Row, Col } from 'antd';
import Login from '../../Components/login/index';
import Signup from '../../Components/signup/index';
import { Container } from '@material-ui/core';

function Auth() {
  return (
    <Container>
      <div
        style={{
          alignItems: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Row
          justify='space-between'
          style={{
            width: '100vw',
          }}
        >
          <Col
            xs={20}
            sm={20}
            md={24}
            lg={10}
            style={{ border: 'solid black 1px', height: '80vh' }}
          >
            <Login />
          </Col>
          <Col
            xs={20}
            sm={20}
            md={24}
            lg={10}
            style={{ border: 'solid black 1px', height: '80vh' }}
          >
            <Signup />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Auth;
