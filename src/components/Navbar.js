import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar style={{backgroundColor: "#202020"}}>
            <Container>
                <Navbar.Brand href="/" style={{color: "#c5c5c5"}}>FileBox</Navbar.Brand>
                <Navbar.Brand style={{color: "#c5c5c5"}} href="/home">Home</Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{color: "#c5c5c5"}} href="#">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
