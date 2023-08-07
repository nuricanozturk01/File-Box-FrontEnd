import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import './OptionsNavBar.css'
import {NavDropdown} from "react-bootstrap";
import listView from "../images/list-view-white.png"
import grid from "../images/grid-view-white.png"


const OptionsNavBar = () => {
    return (
        <Navbar expand="sm" style={{height: "30px", marginTop: "10px"}} className="optionsnow">
            <Container data-bs-theme="dark">
                <Navbar.Brand style={{color: "#B2B2B2"}} className="navbar__brand" href="#home">nuricanozturk\deneme\file</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav  className="ms-auto" style={{backgroundColor: "#272727", color: "#272727"}}>
                        <NavDropdown title={<span style={{ color: "#b2b2b2" }}>Filter</span>} id="basic-nav-dropdown" data-bs-theme="dark" className="custom-dropdown-arrow">
                            <NavDropdown.Item  href="#action/3.1">File Extension</NavDropdown.Item>
                            <NavDropdown.Item  href="#action/3.2">File Length (byte)</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav className="ms-auto">
                        <NavDropdown title={<span style={{ color: "#b2b2b2" }}>View</span>} id="basic-nav-dropdown"
                                     style={{display: 'flex', alignItems: 'center', color: "#b2b2b2"}}
                                     className="custom-dropdown-arrow">

                            <NavDropdown.Item href="#action/3.1">
                                  <span>
                                    <img src={grid} style={{marginRight: "15px"}} alt="logo" width="15px"/>
                                    Grid
                                </span>
                            </NavDropdown.Item>


                            <NavDropdown.Item style={{fontSize: "1rem"}} href="#action/3.2">
                               <span>
                                    <img src={listView} style={{marginRight: "15px"}} alt="logo" width="15px"/>
                                    List
                                </span>
                            </NavDropdown.Item>


                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default OptionsNavBar;
