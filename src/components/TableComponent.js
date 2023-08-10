import React, {useContext, useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import folder_image from "../images/folder.png";
import file_image from "../images/file.png";
import {
    FindFilesOnFolder,
    FindFoldersByUserIdAndFolderId,
    FindRootFolderByUserId
} from "../service/FindFoldersByUserIdAndFolderId";
import PopupComponent from "./PopupComponent";
import {Context} from "../Context/ContextProvider";


const TableComponent = ({navigateId}) => {
    const [folderView, setFolderView] = useState([]);
    const [fileView, setFileView] = useState([]);
    const [click, setClick] = useState(false)
    const [viewFile, setViewFile] = useState(null)
    const context = useContext(Context)
    const [files, setFiles] = useState([]);

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

    function handleDrag(e) {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(droppedFiles);
        console.log(files)
    }

    return (
        <div>

            <div>
                {click && <PopupComponent viewFile={viewFile} onClose={async () => await ClosePopupHandler()}/>}
            </div>

            <div onDrop={handleDrag} onDragOver={e => e.preventDefault()}>
                {!click && (
                    <Table className="table-dark" style={{backgroundColor: "#272727"}}>
                        <thead style={{textAlign: "center", backgroundColor: "#272727"}}>
                        <tr>
                            <th style={{backgroundColor: "#272727", color: "#b2b2b2"}}>Folder</th>
                            <th style={{backgroundColor: "#272727", color: "#b2b2b2"}}>Creation Date</th>
                            <th style={{backgroundColor: "#272727", color: "#b2b2b2"}}>Download</th>
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
                            </tr>
                        ))}


                        </tbody>
                    </Table>)}

            </div>
        </div>

    );

}

export default TableComponent;
