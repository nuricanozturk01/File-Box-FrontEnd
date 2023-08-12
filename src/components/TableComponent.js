import React, {useContext, useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import PopupComponent from "./PopupComponent";
import {Context} from "../Context/ContextProvider";
import PopupRename from "./PopupRename";
import FolderRow from "./FolderRow";
import FileRow from "./FileRow";
import {
    FindFilesOnFolder,
    FindFoldersByUserIdAndFolderId,
    FindRootFolderByUserId
} from "../service/FindFoldersByUserIdAndFolderId";

const TableComponent = ({navigateId}) => {
    // Listing components
    const [folderView, setFolderView] = useState([]);
    const [fileView, setFileView] = useState([]);

    const [click, setClick] = useState(false)

    const [viewFile, setViewFile] = useState(null)
    const [viewFolder, setViewFolder] = useState(null)

    const [renamingFolder, setRenamingFolder] = useState(false)
    const [renamingFile, setRenamingFile] = useState(false)

    const [isClickMenu, setIsClickMenu] = useState(false);

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

    // close popup screen
    const ClosePopupHandler = async () => {
        setClick(false)
        setIsClickMenu(false)
    };

    // For breadcrumb
    useEffect(() => {
        if (navigateId > 0 && navigateId !== undefined && navigateId !== null) {
            const fetchData = async () => {
                const folders = await FindFoldersByUserIdAndFolderId(navigateId);
                const files = await FindFilesOnFolder(navigateId)
                setFolderView(folders)
                setFileView(files)
            }
            fetchData()
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


    return (
        <div>
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

                        {/*List Folders*/}
                        {folderView.map((folder, idx) => (
                            <FolderRow
                                key={idx}
                                folder={folder}
                                handleFolderClick={HandleFolderClick}
                                handleRenameFolder={HandleRenameFolder}
                            />
                        ))}


                        {/*List Files*/}
                        {fileView.map((file, idx) => (
                            <FileRow
                                key={idx}
                                file={file}
                                handleFile={HandleFile}
                                handleRenameFile={HandleRenameFile}
                            />
                        ))}
                        </tbody>

                    </Table>)}


                <div>
                    {isClickMenu &&
                        <PopupRename isFile={renamingFile}
                                     isFolder={renamingFolder}
                                     onClose={async () => await ClosePopupHandler()}
                                     renameFile={viewFile}
                                     renameFolder={viewFolder}/>
                    }
                </div>

                <div>
                    {click && <PopupComponent
                        viewFile={viewFile}
                        onClose={async () => await ClosePopupHandler()}/>
                    }
                </div>
            </div>
        </div>

    );

}

export default TableComponent;
