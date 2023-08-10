import React, {useContext, useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import './OptionsNavBar.css'
import {NavDropdown} from "react-bootstrap";


import {Context} from "./ContextProvider";
import {FindRootFolderByUserId} from "../service/FindFoldersByUserIdAndFolderId";


const OptionsNavBar = ({handleFolderClick}) => {

    const [rootFolder, setRootFolder] = useState(null)
    const [rootUser, setRootUser] = useState(null)
    const context = useContext(Context)

    useEffect(() => {
        const findRootFolder = async () => {
            const folder = await FindRootFolderByUserId(localStorage.getItem('user_id'));
            if (folder) {
                console.log("folder: ", folder);
                setRootFolder(folder);

                const rootUser = {
                    shortName: folder.folder_name,
                    link: folder.folder_name,
                    folderId: folder.folder_id
                };
                setRootUser(rootUser);

                context.setTitle(prev => [rootUser, ...prev])
            } else {
                console.log("Folder not found.");
            }
        };

        findRootFolder();
    }, [])


    const handleLinkClick = async (link, titleItem) => {
        handleFolderClick(titleItem.folderId)
        if (titleItem.folderId !== rootFolder.folderId) {
            const filteredTitle = context.title.filter(item => item.folderId !== titleItem.folderId);

            context.setTitle(filteredTitle);
        }
    };
    return (
        <Navbar expand="sm"
                style={{height: "40px", marginTop: "30px", marginBottom: "-30px", backgroundColor: "#272727"}}
                className="optionsnow">
            <Container data-bs-theme="dark">
                <Navbar.Brand style={{color: "#B2B2B2"}} className="navbar__brand" href="">

                    <Context.Consumer>
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
                    </Context.Consumer>
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
