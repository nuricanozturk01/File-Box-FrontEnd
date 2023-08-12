import React, {useContext, useEffect, useState} from "react";
import {Context} from "../Context/ContextProvider";
import {CreateFolder} from "../service/UploadService";
import {FindRootFolderByUserId} from "../service/FindFoldersByUserIdAndFolderId";

const CreateNewFolder = () =>
{
    const context = useContext(Context)
    const [rootFolder, setRootFolder] = useState()
    const [newFolderName, setNewFolderName] = useState()
    useEffect(() =>
    {
        const findRoot = async () =>
        {
            const root = await FindRootFolderByUserId();
            setRootFolder(root.folder_id)
        }
        findRoot()

    }, [])
    const HandleNewFolderName = (event) =>
    {
        setNewFolderName(event.target.value)
    };
    const HandleSubmitButton = async () =>
    {
        let folderId = await rootFolder;

        if (context.currentFolder && context.currentFolder.folderId)
            folderId = context.currentFolder.folderId

        const response = await CreateFolder(folderId, newFolderName)

        console.log(response)

        const dto = {
            creationDate: new Date().toLocaleDateString(),
            folderId: response.folderId,
            folderName: response.folder_name,
            folderPath: response.folder_path,
            folder_files: []
        }
        console.log(dto)
        context.setFolderView(prev => [...prev, dto])
    };
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="form-floating mb-4" style={{position: "relative"}}>

                <label
                    htmlFor="floatingInput"
                    style={{
                        backgroundColor: "#1c1c1c",
                        color: "#b2b2b2",
                        marginBottom: "0px",
                        position: "inherit",
                        top: "50%",
                        left: "50%",
                        borderColor: "#b2b2b2",
                        transform: "translate(-50%, -50%)"
                    }}>
                    Please Enter the Folder Name
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
                Create Folder
            </button>
        </div>
    );
}
export default CreateNewFolder;
