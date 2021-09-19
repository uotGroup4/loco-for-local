import React from 'react';
import './style.css';
import { HomeOutlined } from '@ant-design/icons';
import { Container } from '@material-ui/core';
import { Input, Divider, Col, Row } from 'antd';
const { TextArea } = Input;

function Dashboard() {
  return (
    <div>
      <Container>
        <div className='header'>
          <HomeOutlined style={{ fontSize: '24px' }} />
          <h1>Name</h1>
          <Input style={{ width: '10rem' }} placeholder='User Name Here' />
        </div>
        <Divider style={{ marginTop: '-5px' }} className='mt-0' />

        <div>
          <Row
            justify='space-between'
            style={{
              width: '90vw',
            }}
          >
            <Col
              xs={20}
              sm={20}
              md={24}
              lg={6}
              style={{
                border: 'solid grey 1px',
                height: '30vh',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TextArea style={{ width: '80%' }} rows={4} />
            </Col>
            <Col
              xs={20}
              sm={20}
              md={24}
              lg={6}
              style={{
                border: 'solid grey 1px',
                height: '30vh',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TextArea style={{ width: '80%' }} rows={4} />
            </Col>
            <Col
              xs={20}
              sm={20}
              md={24}
              lg={6}
              style={{
                border: 'solid grey 1px',
                height: '30vh',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TextArea style={{ width: '80%' }} rows={4} />
            </Col>
          </Row>
          <Row
            justify='space-between'
            style={{
              width: '90vw',
              marginTop: '1rem',
            }}
          >
            <Col
              xs={20}
              sm={20}
              md={24}
              lg={6}
              style={{
                border: 'solid grey 1px',
                height: '30vh',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TextArea style={{ width: '80%' }} rows={4} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
