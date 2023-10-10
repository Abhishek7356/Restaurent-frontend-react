import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar className="bg-dark shadow">
                <Container>
                    <Link to={'/'}><Navbar.Brand href="" className='text-light'>
                        <i class="fa-solid fa-utensils fa-bounce me-2"></i>
                        Resto cafe
                    </Navbar.Brand></Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header