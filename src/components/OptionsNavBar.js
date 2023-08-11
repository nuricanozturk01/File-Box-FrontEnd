import React, {useContext, useRef, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import './OptionsNavBar.css'
import {Collapse, NavbarBrand, NavDropdown, NavItem, NavLink} from "react-bootstrap";
import {Context} from "../Context/ContextProvider";
import CreateFile from "./CreateFile";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";




const OptionsNavBar = ({handleFolderClick}) => {
    const context = useContext(Context)
    const [newFolderClick, setNewFolderClick] = useState(false);
    const handleLinkClick = async (link, titleItem) => {
        console.log(titleItem)
        handleFolderClick(titleItem.folderId)
        if (context.title[context.title.length - 1].link === titleItem.link)
            return
        const items = [];
        let found = false;

        for (let i = 0; i < context.title.length; ++i) {
            if (context.title[i].link === titleItem.link) {
                found = true;
            }

            if (!found || (found && context.title[i].link !== titleItem.link)) {
                items.push(context.title[i]);
            }
        }

        context.setTitle(items);
    };

    const HandleNewFolderClick = () => {
        setNewFolderClick(true)
    };
    return (
        <>
            <Navbar className="optionsnow" bg="dark" data-bs-theme="dark" style={{height: "50px"}}>
                <Container>
                    <Navbar.Brand style={{color: "#B2B2B2", marginTop: "10px"}} className="navbar__brand" href="">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb d-flex">
                                <li className="breadcrumb-item"><a
                                    href="/mainpage">{localStorage.getItem('username')}</a>
                                </li>
                                <Context.Consumer>
                                    {context => (
                                        <>
                                            {context.title.map((titleItem, index) => (
                                                <li className="breadcrumb-item" key={index}>
                                                    <a href="#"
                                                       onClick={() => handleLinkClick(titleItem.link, titleItem)}>{titleItem.shortName}</a>
                                                </li>
                                            ))}
                                        </>
                                    )}
                                </Context.Consumer>
                            </ol>
                        </nav>
                    </Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link onClick={HandleNewFolderClick} href="#" style={{color: "white"}}>Create
                            {newFolderClick && <CreateFile>

                            </CreateFile>}
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

        </>
       /* <div>

            <div>
                <Navbar expand="sm"
                        style={{height: "40px", marginTop: "30px", marginBottom: "-30px", backgroundColor: "#272727"}}
                        className="optionsnow">
                    <Container data-bs-theme="dark">
                        <Navbar.Brand style={{color: "#B2B2B2", marginTop: "10px"}} className="navbar__brand" href="">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb d-flex">
                                    <li className="breadcrumb-item"><a
                                        href="/mainpage">{localStorage.getItem('username')}</a>
                                    </li>
                                    <Context.Consumer>
                                        {context => (
                                            <>
                                                {context.title.map((titleItem, index) => (
                                                    <li className="breadcrumb-item" key={index}>
                                                        <a href="#"
                                                           onClick={() => handleLinkClick(titleItem.link, titleItem)}>{titleItem.shortName}</a>
                                                    </li>
                                                ))}
                                            </>
                                        )}
                                    </Context.Consumer>
                                </ol>
                            </nav>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto" style={{backgroundColor: "#272727", color: "#b2b2b2"}}>
                                <NavDropdown title={<span style={{color: "#b2b2b2"}}>Filter</span>}
                                             id="basic-nav-dropdown"
                                             data-bs-theme="dark" className="custom-dropdown-arrow">
                                    <NavDropdown.Item href="#">File Extension</NavDropdown.Item>
                                    <NavDropdown.Item href="#">File Length (byte)</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto" style={{backgroundColor: "#272727", color: "#b2b2b2"}}>
                                <NavDropdown title={<span style={{color: "#b2b2b2"}}>Create</span>}
                                             id="basic-nav-dropdown"
                                             data-bs-theme="dark" className="custom-dropdown-arrow">
                                    <NavDropdown.Item href="#" onClick={HandleNewFolderClick}>
                                        New Folder
                                        {newFolderClick && <CreateFile/>}
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </div>
        </div>*/
    );
}
export default OptionsNavBar;
