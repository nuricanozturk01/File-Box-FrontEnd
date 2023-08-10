import React, {useContext, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import './OptionsNavBar.css'
import {NavDropdown} from "react-bootstrap";
import {Context} from "../Context/ContextProvider";




const OptionsNavBar = ({handleFolderClick}) => {
    const [currentFolder, setCurrentFolder] = useState()
    const context = useContext(Context)



    const handleLinkClick = async (link, titleItem) => {
        handleFolderClick(titleItem.folderId)
        const filteredTitle = context.title.filter(item => item.folderId !== titleItem.folderId);
        context.setTitle(filteredTitle);
    };
    return (
        <Navbar expand="sm"
                style={{height: "40px", marginTop: "30px", marginBottom: "-30px", backgroundColor: "#272727"}}
                className="optionsnow">
            <Container data-bs-theme="dark">
                <Navbar.Brand style={{color: "#B2B2B2", marginTop: "10px"}} className="navbar__brand" href="">
                    <nav aria-label="breadcrumb" >
                        <ol className="breadcrumb d-flex">
                            <li className="breadcrumb-item"><a href="/mainpage">{localStorage.getItem('username')}</a></li>
                            <Context.Consumer>
                                {context => (
                                    <>
                                        {context.title.map((titleItem, index) => (
                                            <li className="breadcrumb-item" key={index}>
                                                <a href="#" onClick={() => handleLinkClick(titleItem.link, titleItem)}>{titleItem.shortName}</a>
                                            </li>
                                        ))}
                                    </>
                                )}
                            </Context.Consumer>
                        </ol>
                    </nav>
                  {/*  <Context.Consumer>
                        {context => (
                            <div>
                                {context.title.map((titleItem, index) => (
                                    <span key={index}>
                                        {index > 0 && " > "}
                                        <span onClick={() => handleLinkClick(titleItem.link, titleItem)}>
                                            {titleItem.shortName}
                                        </span>
                                    </span>
                                ))}

                            </div>
                        )}
                    </Context.Consumer>*/}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto" style={{backgroundColor: "#272727", color: "#b2b2b2"}}>
                        <NavDropdown title={<span style={{color: "#b2b2b2"}}>Filter</span>} id="basic-nav-dropdown"
                                     data-bs-theme="dark" className="custom-dropdown-arrow">
                            <NavDropdown.Item href="#action/3.1">File Extension</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">File Length (byte)</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default OptionsNavBar;
