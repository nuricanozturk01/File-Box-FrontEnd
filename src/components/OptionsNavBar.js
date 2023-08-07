import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import './OptionsNavBar.css'
import {NavDropdown} from "react-bootstrap";
import listView from "../images/list-view.png"
import grid from "../images/grid-view.png"


const OptionsNavBar = () => {
    return (
        <Navbar expand="sm" style={{height: "30px", marginTop: "10px"}} className="optionsnow bg-body-secondary">
            <Container>
                <Navbar.Brand className="navbar__brand" href="#home">nuricanozturk\deneme\file</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto">
                        <NavDropdown title="Filter" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Grid</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">List</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav className="ms-auto">
                        <NavDropdown title="View" id="basic-nav-dropdown"
                                     style={{display: 'flex', alignItems: 'center'}}>

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
