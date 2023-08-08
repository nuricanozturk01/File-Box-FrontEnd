import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import folder_image from "../images/folder.png";
import file_image from "../images/file.png";
import {FindFilesOnFolder, FindFoldersByUserIdAndFolderId} from "../service/FindFoldersByUserIdAndFolderId";
import PopupComponent from "./PopupComponent";


const TableComponent = () => {
    const [folderView, setFolderView] = useState([]);
    const [fileView, setFileView] = useState([]);
    const [click, setClick] = useState(false)
    const [viewFile, setViewFile] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const folders = await FindFoldersByUserIdAndFolderId(1);
            const files = await FindFilesOnFolder(1)
            setFolderView(folders)
            setFileView(files)
        }
        fetchData()
    }, [])

    const HandleFolderClick = async (folderId) => {
        const folders = await FindFoldersByUserIdAndFolderId(folderId);
        const files = await FindFilesOnFolder(folderId)
        setFolderView(folders)
        setFileView(files)
    };


    function HandleFile(file) {
        setClick(true)
        setViewFile(file)
    }

    const ClosePopupHandler = () => {
        setClick(false)
    };


    return (
        <div>

            <div>
                {click && <PopupComponent viewFile={viewFile} onClose={() => ClosePopupHandler()}></PopupComponent>}
            </div>

            <div>
                {!click &&( <Table className="table-dark" style={{backgroundColor: "#272727"}}>
                    <thead style={{textAlign: "center", backgroundColor: "#272727"}}>
                    <tr>
                        <th style={{backgroundColor: "#272727", color: "#b2b2b2"}}>Folder</th>
                        <th style={{backgroundColor: "#272727", color: "#b2b2b2"}}>Creation Date</th>
                    </tr>
                    </thead>

                    <tbody style={{backgroundColor: "#272727"}}>

                    {folderView.map((folder, idx) => (
                        <tr key={idx}>
                            <td style={{verticalAlign: "middle", backgroundColor: "#272727"}}>
                                <a onClick={() => HandleFolderClick(folder.folderId)}>
                                    <img
                                        src={folder_image}
                                        alt="folder"
                                        height="50"
                                        width="50"
                                    />
                                    <label style={{color: "#b2b2b2", textAlign: "center", marginLeft: "20px"}}>
                                        {folder.folderName}
                                    </label>
                                </a>
                            </td>
                            <td style={{verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727"}}>
                                <label style={{color: "#b2b2b2", textAlign: "center", marginLeft: "20px"}}>
                                    {folder.creationDate}
                                </label>
                            </td>
                        </tr>
                    ))}

                    {fileView.map((file, idx) => (
                        <tr key={idx}>

                            <td style={{verticalAlign: "middle", backgroundColor: "#272727"}}>
                                <a onClick={() => HandleFile(file)}>
                                    <img
                                        src={file_image}
                                        alt="file"
                                        height="50"
                                        width="50"
                                    />
                                    <label style={{color: "#b2b2b2", textAlign: "center", marginLeft: "20px"}}>
                                        {file.file_name}
                                    </label>
                                </a>
                            </td>
                            <td style={{verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727"}}>
                                <label style={{color: "#b2b2b2", textAlign: "center", marginLeft: "20px"}}>
                                    {file.created_date}
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
