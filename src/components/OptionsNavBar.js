import React, {useContext, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import {Context} from "../Context/ContextProvider";
import PopupRename from "./PopupRename";
import UploadComponentFiles from "./UploadComponentFiles";
import {Dropdown, DropdownButton, NavDropdown} from "react-bootstrap";


const OptionsNavBar = ({handleFolderClick}) => {

    const context = useContext(Context)
    const [isCreateFolder, setIsCreateFolder] = useState(false)
    const [isClickUploadFolder, setIsClickUploadFolder] = useState(false)
    const handleLinkClick = async (link, titleItem) => {

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

    // close popup screen
    const ClosePopupHandler = async () => {
        setIsCreateFolder(false)
    };
    const HandleCreateFolder = () => {
        setIsCreateFolder(true)
    };
    const HandleUploadFiles = () => {
        setIsClickUploadFolder(!isClickUploadFolder)
    };
    return (
        <div>
            {isClickUploadFolder && <UploadComponentFiles/>}
            <div>

                <Navbar expand="sm" data-bs-theme="dark"
                        style={{
                            marginTop: "10px",
                            marginBottom: "-35px",
                            backgroundColor: "#272727",
                            height: "35px",
                            fontSize: "12pt",
                            display: "flex", // Flexbox kullanarak içeriği yatayda hizalayın
                            justifyContent: "center", // İçeriği yatayda tam ortada hizalayın
                            alignItems: "center", // İçeriği dikeyde tam ortada hizalayın
                        }}>
                    <Container>
                        <Navbar.Brand href="#home" style={{color: "#B2B2B2", fontSize: "12pt", marginTop: "10px"}}>
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
                            <Nav className="me-auto my-2 my-lg-0">

                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link style={{color: "#b2b2b2"}} href="#" onClick={HandleCreateFolder}>Create Folder</Nav.Link>
                                <Nav.Link style={{color: "#b2b2b2"}} href="#" onClick={HandleUploadFiles}>Upload Files</Nav.Link>

                                <Nav.Link disabled={true}>|</Nav.Link>

                                <NavDropdown title="Sort By">
                                    <NavDropdown.Item style={{backgroundColor: "#272727"}} href="#action/3.1">Date</NavDropdown.Item>
                                    <NavDropdown.Item style={{backgroundColor: "#272727"}} href="#action/3.1">File Size</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Filter By">
                                    <NavDropdown.Item style={{backgroundColor: "#272727"}}
                                                      href="#action/3.1">Extension</NavDropdown.Item>
                                </NavDropdown>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>

            </div>
            {isCreateFolder && <PopupRename onClose={async () => await ClosePopupHandler()} isNewFolder={true}/>}
        </div>
    );
}
export default OptionsNavBar;
