import React from 'react';
import './styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand className="navbrand" href="/dwell">dwell</Navbar.Brand>
            <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="collapse" id="basic-navbar-nav">
                {/* <Nav className="nav-links">
                    <Link to="/about" className="nav-link">about</Link>
                    <Link to="/contact" className="nav-link">contact</Link>
                </Nav> */}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
