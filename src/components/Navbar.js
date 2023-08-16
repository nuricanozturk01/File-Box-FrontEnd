import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import account_image from '../images/account.svg'
import app_image from '../images/database-svgrepo-com.svg'
import home_image from '../images/home.svg'
const NavBar = () =>
{
    return (
        <Navbar style={{backgroundColor: "#202020"}}>
            <Container>
                <Navbar.Brand href="/" style={{color: "#c5c5c5"}}>
                    <img src={app_image} alt="account" width="35px" height="39px"/>

                    <label style={{marginLeft: "4px"}}>
                        FileBox
                    </label>

                </Navbar.Brand>
                <Navbar.Brand style={{color: "#c5c5c5"}} href="/home">
                    <img src={home_image} alt="account" width="35px" height="39px"
                    style={{marginRight: "2px", marginBottom: "6px"}}/>

                    <label style={{marginLeft: "4px", marginTop: "5px"}}>Home</label>
                </Navbar.Brand>


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Navbar.Brand style={{color: "#c5c5c5", fontSize: "11pt", fontFamily: "Arial, Helvetica, sans-serif"}}>
                            <img src={account_image} alt="account" width="25px" height="27px"/>
                            <label style={{marginLeft: "4px"}}>
                                account: [{localStorage.getItem('username')}]
                            </label>
                        </Navbar.Brand>
                    </Nav>
                   {/* <Nav className="ms-auto">
                        <Nav.Link style={{color: "#c5c5c5"}} href="#">Logout</Nav.Link>
                    </Nav>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
