import React from 'react';
import logo from "../../assets/logo.png";
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Nav from '../Components/Nav';



const Header = () => {
    return (
        <Container className='mt-5'>
            <div className='text-center'>
                 <img src={logo} alt="" />
                 <p className='text-secondary mt-1 fs-5 '>Journalism Without Fear or Favour</p>
                 <p className='text-secondary  fs-5'>{moment().format('dddd, MMMM, D,YYYY')}</p>
            </div>
            <div className='d-flex align-items-center bg-secondary p-2'>
            <Button variant="danger px-4 fs-4">Latest</Button>
            <marquee className="text-danger" behavior="" direction="">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</marquee>
            </div>
            <Nav/>
        </Container>
    );
};

export default Header;