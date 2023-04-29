import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1  from "../../assets/qZone1.png"
import qzone2  from "../../assets/qZone2.png"
import qzone3  from "../../assets/qZone3.png"

const RightNav = () => {
    return (
        <div className=''>
          <div>
          <h4>Login With</h4>
          <div>
          <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item className='text-center text-black'>< FaGoogle /> Google</ListGroup.Item>
        <ListGroup.Item className='text-center text-black'><FaGithub/> Github</ListGroup.Item>
      </ListGroup>
    </Card>
          </div>
          </div>
          
          <div className='mt-3'>
            <h4 className='text-secondary'>Find Us On</h4>
            <div>
            <ListGroup>
      <ListGroup.Item className='text-center fs-4 text-primary'><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item className='text-center fs-4 text-primary'><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className='text-center fs-4 text-danger'><FaInstagram/>Instragram</ListGroup.Item>
    </ListGroup>
            </div>
          </div>
          <div className='mt-3 bg-secondary py-2 text-center bg-opacity-25'>
                <h4>Q-Zone</h4>
                <div>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
          </div>
        </div>
    );
};

export default RightNav;