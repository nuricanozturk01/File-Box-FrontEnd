import React, {useContext, useEffect, useState} from "react";
import {RenameFolderWithFolderId} from "../service/RenameService";
import {Context} from "../Context/ContextProvider";

const RenameFolder = ({folder}) =>
{
    const [newFolderName, setNewFolderName] = useState()
    const [renameFolder, setRenameFolder] = useState(null)
    const context = useContext(Context)
    useEffect(() =>
    {
        setRenameFolder(folder)
    }, [folder])

    const HandleNewFolderName = (event) =>
    {
        setNewFolderName(event.target.value)
    };
    const HandleSubmitButton = async () =>
    {

        try
        {
            await RenameFolderWithFolderId(renameFolder.folderId, newFolderName)

        }
        catch (error)
        {

        }
    };
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="form-floating mb-4" style={{position: "relative"}}>

                <label
                    htmlFor="floatingInput"
                    style={{
                        backgroundColor: "#1c1c1c",
                        color: "#b2b2b2",
                        position: "inherit",
                        top: "50%",
                        left: "50%",
                        borderColor: "#b2b2b2",
                        transform: "translate(-50%, -50%)"
                    }}>
                    Please Enter the New Folder Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    style={{
                        backgroundColor: "#272727",
                        color: "#B2B2B2",
                        borderColor: "#808080",
                        width: "400px"
                    }}
                    placeholder="New File Name"
                    onChange={HandleNewFolderName}
                />

            </div>

            <button
                onClick={HandleSubmitButton}
                className="btn btn-primary py-2"
                style={{
                    width: "150px",
                    backgroundColor: "#272727",
                    color: "#B2B2B2",
                    borderColor: "#808080",
                }} type="submit">
                Rename
            </button>
        </div>

    );
}

export default RenameFolder;
