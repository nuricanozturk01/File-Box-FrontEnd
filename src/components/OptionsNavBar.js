import React, {useContext, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Context} from "../Context/ContextProvider";
import PopupRename from "./PopupRename";
import {NavDropdown} from "react-bootstrap";
import {
    FilterFilesByFileExtension,
    SortFilesByCreationDate,
    SortFilesByFileSize
} from "../service/SortAndFilterService";
import UploadComponentFiles from "./UploadComponentFiles";
import {
    FindFilesOnFolder,
    FindFolderByFolderId,
    FindFoldersByUserIdAndFolderId
} from "../service/FindFoldersByUserIdAndFolderId";


const OptionsNavBar = ({handleFolderClick}) =>
{

    const context = useContext(Context)
    const [isCreateFolder, setIsCreateFolder] = useState(false)
    const [isClickUploadFolder, setIsClickUploadFolder] = useState(false)

    const [selectedExtension, setSelectedExtension] = useState(null);
    const availableExtensions = ['.jpg', '.png', '.pdf', '.docx'];

    const handleExtensionSelect = (extension) =>
    {
        setSelectedExtension(extension === selectedExtension ? null : extension);
    };

    const handleFilter = async () =>
    {
        if (selectedExtension)
        {
            let folderId = context.rootFolder.folder_id
            if (context.currentFolder)
                folderId = context.currentFolder.folderId
            const data = await FilterFilesByFileExtension(folderId, selectedExtension)
            context.setFileView(data.files)
        }
    };

    const ChangeDirectory = async (folderId) =>
    {
        const currentFolder = context.currentFolder;
        if (folderId !== currentFolder.folderId)
        {
            const folder = await FindFolderByFolderId(folderId);
            context.setCurrentFolder(folder)
            const folders = await FindFoldersByUserIdAndFolderId(folderId);
            const files = await FindFilesOnFolder(folderId)

            context.setFolderView(folders)
            context.setFileView(files)




            const newTitle = {
                shortName: folder.folderName,
                link: folder.folderPath,
                folderId: folder.folderId
            }

            context.setTitle(prev => [...prev, newTitle])
        }
    };
    const handleLinkClick = async (link, titleItem) =>
    {
        await ChangeDirectory(titleItem.folderId)
        //console.log('CF: ', context.currentFolder)

        if (context.title[context.title.length - 1].link === titleItem.link)
            return

        const items = [];

        let found = false;

        for (let i = 0; i < context.title.length; ++i)
        {
            if (context.title[i].link === titleItem.link)
            {
                found = true;
                items.push(context.title[i]);
                break
            }

            if (!found || (found && context.title[i].link !== titleItem.link))
            {
                items.push(context.title[i]);
            }
        }

        context.setTitle(items);
    };

    // close popup screen
    const ClosePopupHandler = async () =>
    {
        setIsCreateFolder(false)
    };
    const HandleCreateFolder = () =>
    {
        setIsCreateFolder(true)
    };
    const HandleUploadFiles = () =>
    {
        setIsClickUploadFolder(!isClickUploadFolder)
    };

    const HandleSortFilesByFileSize = async () =>
    {
        let folderId = context.rootFolder.folder_id

        if (context.currentFolder)
            folderId = context.currentFolder.folderId

        const data = await SortFilesByFileSize(folderId)

        context.setFileView(data.files)
    };
    const HandleSortFilesByCreationDate = async () =>
    {
        let folderId = context.rootFolder.folder_id

        if (context.currentFolder)
            folderId = context.currentFolder.folderId

        const data = await SortFilesByCreationDate(folderId)

        context.setFileView(data.files)
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
                                        href="/home">{localStorage.getItem('username')}</a>
                                    </li>

                                    <Context.Consumer>
                                        {context => (
                                            <>
                                                {context.title.map((titleItem, index) => (
                                                    <li className="breadcrumb-item" key={index}>
                                                        <a href="#"
                                                           onClick={async () => await handleLinkClick(titleItem.link, titleItem)}>{titleItem.shortName}</a>
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
                                <Nav.Link style={{color: "#b2b2b2"}} href="#" onClick={HandleCreateFolder}>Create
                                    Folder</Nav.Link>
                                <Nav.Link disabled={true}>|</Nav.Link>
                                <Nav.Link style={{color: "#b2b2b2"}} href="#" onClick={HandleUploadFiles}>Upload
                                    Files</Nav.Link>

                                <Nav.Link disabled={true}>||</Nav.Link>


                                <NavDropdown title="Sort By">
                                    <NavDropdown.Item style={{backgroundColor: "#272727"}}
                                                      href="#action/3.1"
                                                      onClick={HandleSortFilesByCreationDate}>

                                        Date
                                    </NavDropdown.Item>
                                    <NavDropdown.Item style={{backgroundColor: "#272727"}}
                                                      href="#action/3.1"
                                                      onClick={HandleSortFilesByFileSize}>
                                        File Size</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link disabled={true}>|</Nav.Link>
                                <NavDropdown title="Filter By">
                                    {availableExtensions.map(extension => (
                                        <NavDropdown.Item
                                            key={extension}
                                            style={{
                                                backgroundColor: "#272727",
                                                color: selectedExtension === extension ? 'white' : '#b2b2b2'
                                            }}
                                            onClick={() => handleExtensionSelect(extension)}
                                        >
                                            {extension}
                                        </NavDropdown.Item>
                                    ))}
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item style={{backgroundColor: "#272727", color: 'white'}}
                                                      onClick={handleFilter}>
                                        Apply Filter
                                    </NavDropdown.Item>
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
