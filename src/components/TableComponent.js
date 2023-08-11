import React, {useContext, useEffect, useState} from "react";
import {Dropdown, Table} from "react-bootstrap";
import folder_image from "../images/folder.png";
import file_image from "../images/file.png";
import {
    FindFilesOnFolder,
    FindFoldersByUserIdAndFolderId,
    FindRootFolderByUserId
} from "../service/FindFoldersByUserIdAndFolderId";
import PopupComponent from "./PopupComponent";
import {Context} from "../Context/ContextProvider";
import Menu from "./Menu";
import RenameFile from "./RenameFile";
import PopupRename from "./PopupRename";
import {RemoveFileWithFileId, RemoveFolderWithFolderId} from "../service/RemoveService";
import {DownloadFile, DownloadFolder} from "../service/DownloadService";


const TableComponent = ({navigateId}) => {
    const [folderView, setFolderView] = useState([]);
    const [fileView, setFileView] = useState([]);

    const [click, setClick] = useState(false)
    const [viewFile, setViewFile] = useState(null)
    const [viewFolder, setViewFolder] = useState(null)

    const [renamingFile, setRenamingFile] = useState(false)
    const [renamingFolder, setRenamingFolder] = useState(false)
    const [isClickMenu, setIsClickMenu] = useState(false);
    const [isDelete, setIsDelete] = useState(false)
    const context = useContext(Context)

    useEffect(() => {
        const fetchData = async () => {
            const rootFolder = await FindRootFolderByUserId(localStorage.getItem('user_id'))
            const folders = await FindFoldersByUserIdAndFolderId(rootFolder.folder_id);
            const files = await FindFilesOnFolder(rootFolder.folder_id)
            setFolderView(folders)
            setFileView(files)
        }

        fetchData()
    }, [])


    const HandleFolderClick = async (folder) => {
        context.setCurrentFolder(folder)

        const folders = await FindFoldersByUserIdAndFolderId(folder.folderId);
        const files = await FindFilesOnFolder(folder.folderId)
        setFolderView(folders)
        setFileView(files)

        const newTitle = {
            shortName: folder.folderName,
            link: folder.folderPath,
            folderId: folder.folderId
        }

        context.setTitle(prev => [...prev, newTitle])
    };


    function HandleFile(file) {
        setClick(true)
        setViewFile(file)
    }

    const ClosePopupHandler = async () => {
        setClick(false)
        setIsClickMenu(false)
    };

    useEffect(() => {
        if (navigateId > 0 && navigateId !== undefined && navigateId !== null) {
            const asd = async () => {
                const folders = await FindFoldersByUserIdAndFolderId(navigateId);
                const files = await FindFilesOnFolder(navigateId)
                setFolderView(folders)
                setFileView(files)
            }
            asd()
        }

    }, [navigateId])


    const HandleRenameFile = (file) => {
        setIsClickMenu(true)
        setRenamingFile(true)
        setViewFile(file)

        setRenamingFolder(false)
        setViewFolder(null)
    };
    const HandleRenameFolder = (folder) => {
        setIsClickMenu(true)
        setRenamingFolder(true)
        setViewFolder(folder)

        setRenamingFile(false)
        setViewFile(null)
    };
    const HandleRemoveFile = async (file) => {
        const response = await RemoveFileWithFileId(file.file_id)
    };
    const HandleRemoveFolder = (folder) => {
        const response = RemoveFolderWithFolderId(folder.folderId)
        console.log(response)
    };
    const HandleDownloadFile = async (file) => {
        await DownloadFile(file)
    };
    const HandleDownloadFolder = async (folder) => {
        await DownloadFolder(folder)
    };
    return (
        <div>
            <div>
                {isClickMenu &&
                    <PopupRename isFile={renamingFile}
                                 isFolder={renamingFolder}
                                 onClose={async () => await ClosePopupHandler()}
                                 renameFile={viewFile}
                                 renameFolder={viewFolder} />
                }
            </div>
            <div>
                {click && <PopupComponent viewFile={viewFile} onClose={async () => await ClosePopupHandler()}/>}
            </div>

            <div>
                {!click && (
                    <Table className="table-dark table-hover table-bordered" style={{backgroundColor: "#272727"}}>
                        <thead style={{textAlign: "center", backgroundColor: "#272727"}}>
                        <tr>
                            <th style={{backgroundColor: "#272727", color: "#b2b2b2"}}>Folder</th>
                            <th style={{backgroundColor: "#272727", color: "#b2b2b2"}}>Creation Date</th>
                            <th style={{backgroundColor: "#272727", color: "#b2b2b2"}}>Select</th>
                            <th style={{backgroundColor: "#272727", color: "#b2b2b2"}}></th>
                        </tr>
                        </thead>

                        <tbody style={{backgroundColor: "#272727"}}>

                        {folderView.map((folder, idx) => (
                            <tr key={idx}>
                                <td style={{verticalAlign: "middle", backgroundColor: "#272727"}}>
                                    <a onClick={() => HandleFolderClick(folder)}>
                                        <img
                                            src={folder_image}
                                            alt="folder"
                                            height="40"
                                            width="40"
                                        />
                                        <label style={{color: "#b2b2b2", textAlign: "center", marginLeft: "20px"}}>
                                            {folder.folderName}
                                        </label>
                                    </a>
                                </td>
                                <td style={{verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727"}}>
                                    <label style={{color: "#b2b2b2", textAlign: "center", marginLeft: "20px", whiteSpace: "normal"}}>
                                        {folder.creationDate}
                                    </label>
                                </td>

                                <td style={{verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727"}}>

                                    <label style={{color: "#b2b2b2", textAlign: "center", marginLeft: "20px"}}>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""/>
                                        </div>
                                    </label>

                                </td>

                                <td style={{verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727"}}>

                                    <label style={{ color: "#b2b2b2", textAlign: "center" }}>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                                            <Dropdown data-bs-theme="dark">
                                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary"
                                                                 style={{width: "100px", height: "30px", backgroundColor: "#272727", borderColor: "#272727"}}>
                                                    ...
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => HandleDownloadFolder(folder)} href="#">Download</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => HandleRenameFolder(folder)} href="#">Rename</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => HandleRemoveFolder(folder)} href="#">Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </div>
                                    </label>
                                </td>
                            </tr>
                        ))}

                        {fileView.map((file, idx) => (
                            <tr key={idx}>
                                <td style={{verticalAlign: "middle", backgroundColor: "#272727"}}>
                                    <a onClick={() => HandleFile(file)} style={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            src={file_image}
                                            alt="file"
                                            height="50"
                                            width="50"
                                        />
                                        <label style={{ color: "#b2b2b2", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "500px" }}>
                                            {file.file_name}
                                        </label>
                                    </a>
                                </td>
                                <td style={{ verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727", whiteSpace: "normal" }}>
                                    <label style={{ color: "#b2b2b2", marginLeft: "20px", whiteSpace: "normal" }}>
                                        {file.created_date}
                                    </label>
                                </td>
                                <td style={{ verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727" }}>
                                    <label style={{ color: "#b2b2b2", marginLeft: "20px" }}>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" />
                                        </div>
                                    </label>
                                </td>

                                <td style={{verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727"}}>

                                    <label style={{ color: "#b2b2b2", textAlign: "center" }}>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                                            <Dropdown data-bs-theme="dark">
                                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary"
                                                                 style={{width: "100px", height: "30px", backgroundColor: "#272727", borderColor: "#272727"}}>
                                                    ...
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => HandleDownloadFile(file)} href="#">Download</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => HandleRenameFile(file)} href="#">Rename</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => HandleRemoveFile(file)} href="#">Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </div>
                                    </label>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>)}

            </div>
        </div>

    );

}

export default TableComponent;
