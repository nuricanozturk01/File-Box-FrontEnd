import React, {useContext, useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import folder_image from "../images/folder.png";
import file_image from "../images/file.png";
import {FindFilesOnFolder, FindFoldersByUserIdAndFolderId} from "../service/FindFoldersByUserIdAndFolderId";
import PopupComponent from "./PopupComponent";
import {Context} from "./ContextProvider";





const TableComponent = ({navigateId}) => {
    const [folderView, setFolderView] = useState([]);
    const [fileView, setFileView] = useState([]);
    const [click, setClick] = useState(false)
    const [viewFile, setViewFile] = useState(null)
    const context = useContext(Context)


    useEffect(() => {
        const fetchData = async () => {
            const folders = await FindFoldersByUserIdAndFolderId(1);

            const files = await FindFilesOnFolder(1)
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
        if (navigateId > 0 && navigateId !== undefined && navigateId !== null)
        {
            const asd = async () => {
                const folders = await FindFoldersByUserIdAndFolderId(navigateId);
                const files = await FindFilesOnFolder(navigateId)
                setFolderView(folders)
                setFileView(files)
            }
            asd()
        }

    }, [navigateId])

    return (
        <div>

            <div>
                {click && <PopupComponent viewFile={viewFile} onClose={async () => await ClosePopupHandler()}/>}
            </div>

            <div>
                {!click && (<Table className="table-dark" style={{backgroundColor: "#272727"}}>
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
                                <a onClick={() => HandleFolderClick(folder)}>
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
