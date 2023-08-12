import React, {useContext, useState} from 'react';
import folder_image from "../images/folder.png";
import {Dropdown} from "react-bootstrap";
import {DownloadFolder} from "../service/DownloadService";
import {RemoveFolderWithFolderId} from "../service/RemoveService";
import {Context} from "../Context/ContextProvider";
import {Status} from "../Status";

const FolderRow = ({folder, handleFolderClick, handleRenameFolder}) =>
{
    const context = useContext(Context)
    const HandleDownloadFolder = async (folder) =>
    {
        try
        {
            await DownloadFolder(folder)
            context.setDownloadFolderStatus(Status.Success)
            context.setShowAlert(true)
        }
        catch (error)
        {
            context.setDownloadFolderStatus(Status.Fail)
            context.setShowAlert(true)
        }
    };
    const HandleRemoveFolder = async (folder) =>
    {
        await RemoveFolderWithFolderId(folder.folderId)
        context.setFolderView((prevFolderView) =>
            prevFolderView.filter((f) => f.folderId !== folder.folderId)
        );
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
                <label style={{color: "#b2b2b2", textAlign: "center", marginLeft: "20px", whiteSpace: "normal"}}>
                    - -
                </label>
            </td>


            <td style={{verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727"}}>
                <label style={{color: "#b2b2b2", textAlign: "center"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Dropdown data-bs-theme="dark">
                            <Dropdown.Toggle className="custom-dropdown-toggle" variant="secondary" style={{
                                width: "100px",
                                height: "30px",
                                backgroundColor: "#272727",
                                borderColor: "#272727"
                            }}>
                                . . .
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
