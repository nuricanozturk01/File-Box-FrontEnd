import React, {useContext, useState} from 'react';
import folder_image from "../images/folder.png";
import {Dropdown} from "react-bootstrap";
import {DownloadFolder} from "../service/DownloadService";
import {RemoveFolderWithFolderId} from "../service/RemoveService";
import {Context} from "../Context/ContextProvider";
import {Status} from "../Status";
import ToastMessage from "./ToastMessage";
import RightClickComponent from "./RightClickComponent";

const FolderRow = ({folder, handleFolderClick, handleRenameFolder}) =>
{
    const [success, setSuccess] = useState()
    const [showContextMenu, setShowContextMenu] = useState(false);
    const context = useContext(Context)
    const HandleDownloadFolder = async (folder) =>
    {
        context.setIsUpload(false)
        await DownloadFolder(folder, progress => context.setDownloadProgress(progress))
            .then(async result =>
            {
                context.setDownloadFolderStatus(Status.Success)
                context.setShowAlert(true)
                setSuccess(true)
            })
            .catch(error =>
            {

                context.setDownloadFolderStatus(Status.Fail)
                context.setShowAlert(true)
                setSuccess(false)
            })
            .finally(() => context.setDownloadProgress(0))
    };
    const HandleRemoveFolder = async (folder) =>
    {
        await RemoveFolderWithFolderId(folder.folderId)
        context.setFolderView((prevFolderView) =>
            prevFolderView.filter((f) => f.folderId !== folder.folderId)
        );
    };
    const handleContextMenu = (e) =>
    {
        e.preventDefault();

        setShowContextMenu(true);
        context.setXPosition(e.pageX);
        context.setYPosition(e.pageY);
        document.addEventListener('click', handleClickOutside);
    };
    const handleClickOutside = () =>
    {
        setShowContextMenu(false);
        document.removeEventListener('click', handleClickOutside);
    };
    const handleOnClick = (e) =>
    {
        setShowContextMenu(false);
    };

    return (
        <tr>
            <td style={{verticalAlign: "middle", backgroundColor: "#272727"}} onContextMenu={handleContextMenu}
                onClick={handleOnClick}>
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


            {showContextMenu && (
                <div style={{
                    position: 'absolute',
                    zIndex: '100',
                    top: context.yPosition,
                    left: context.xPosition,
                    backgroundColor: "#272727"
                }}>
                    <RightClickComponent
                        download={() => HandleDownloadFolder(folder)}
                        rename={() => handleRenameFolder(folder)}
                        remove={() => HandleRemoveFolder(folder)}
                    />
                </div>

            )}
            {success &&
                <ToastMessage message="Download Operation is successful!" title="Success" rightSideMessage="now"/>}
        </tr>
    );
};

export default FolderRow;
