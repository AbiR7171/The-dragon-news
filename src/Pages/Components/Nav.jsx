import React from 'react';
import { Button, Container, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        
          <div className='d-flex align-items-center mt-4 '>
           <div className='mx-auto '>
           <Link className='text-decoration-none me-3  text-secondary'>Home</Link>
            <Link className='text-decoration-none me-3 text-secondary'>About</Link>
            <Link className='text-decoration-none me-3 text-secondary'>Carrer</Link>
           </div>
           <div className='d-flex align-items-center'>
            <div className='me-2 text-secondary'>Profile</div>
            <div><Button className='px-5 py-2' variant="dark">Login</Button></div>
           </div>
        </div>
    );
};

export default Nav;