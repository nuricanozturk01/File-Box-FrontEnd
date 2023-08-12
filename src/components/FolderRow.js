import React, {useContext, useState} from 'react';
import folder_image from "../images/folder.png";
import {Dropdown} from "react-bootstrap";
import {DownloadFolder} from "../service/DownloadService";
import {RemoveFolderWithFolderId} from "../service/RemoveService";

const FolderRow = ({folder, handleFolderClick, handleRenameFolder}) => {
    const HandleDownloadFolder = async (folder) => {
        await DownloadFolder(folder)
    };
    const HandleRemoveFolder = (folder) => {
        const response = RemoveFolderWithFolderId(folder.folderId)
        console.log(response)
    };

    return (
        <tr>



            <td style={{verticalAlign: "middle", backgroundColor: "#272727"}}>
                <a onClick={() => handleFolderClick(folder)}>
                    <img src={folder_image} alt="folder" height="40" width="40"/>
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
                <label style={{color: "#b2b2b2", textAlign: "center"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Dropdown data-bs-theme="dark">
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{
                                width: "100px",
                                height: "30px",
                                backgroundColor: "#272727",
                                borderColor: "#272727"
                            }}>
                                ...
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item style={{backgroundColor: "#272727"}}
                                               onClick={() => HandleDownloadFolder(folder)}
                                               href="#">Download</Dropdown.Item>
                                <Dropdown.Item style={{backgroundColor: "#272727"}}
                                               onClick={() => handleRenameFolder(folder)}
                                               href="#">Rename</Dropdown.Item>
                                <Dropdown.Item style={{backgroundColor: "#272727"}}
                                               onClick={() => HandleRemoveFolder(folder)}
                                               href="#">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </label>
            </td>
        </tr>
    );
};

export default FolderRow;
