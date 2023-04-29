import React from 'react';
import Header from '../SharePage/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Components/RightNav';
import LeftNav from '../Components/LeftNav';

const Layout = () => {
    return (
        <div>
            <Header/>
            <Container className='mt-5'>
            <Row>
        <Col lg={3}>
          <LeftNav/>
        </Col>
        <Col lg={6}>
            Main containn....
        </Col>
        <Col lg={3}>
           <RightNav/>
        </Col>
      </Row>
            </Container>
        </div>
    );
};

export default Layout;