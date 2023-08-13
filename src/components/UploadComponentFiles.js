import React, {useContext, useEffect, useState} from "react";
import './UploadComponent.css'
import {UploadFiles} from "../service/UploadService";
import {Context} from "../Context/ContextProvider";
import {FindRootFolderByUserId} from "../service/FindFoldersByUserIdAndFolderId";
import {Status} from "../Status";

const UploadComponentFiles = () =>
{
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [rootFolder, setRootFolder] = useState(1)
    const context = useContext(Context)
    const HandleFiles = (event) =>
    {
        const files = event.target.files;
        setSelectedFiles(Array.from(files));
    };
    useEffect(() =>
    {
        const findRoot = async () =>
        {
            const root = await FindRootFolderByUserId();
            setRootFolder(root.folder_id)
        }
        findRoot()

    }, [])

    const loadData = (responseData) =>
    {
        for (let i = 0; i < responseData.files.length; ++i)
        {
            const file = responseData.files[i]
            const dto = {
                created_date: file.created_date,
                file_byte: file.file_byte,
                file_id: file.file_id,
                file_name: file.file_name,
                file_path: file.file_path,
                file_type: file.file_type,
                real_path: file.real_path
            }
            context.setFileView(prev => [...prev, dto])
        }
    };
    const HandleUploadButton = async () =>
    {
        let folderId = await rootFolder;

        if (context.currentFolder && context.currentFolder.folderId)
            folderId = context.currentFolder.folderId

        try
        {
             const responseData = await UploadFiles(folderId, selectedFiles)
             await loadData(responseData)
            context.setUploadFileStatus(Status.Success)
            context.setShowAlert(true)
        }
        catch (error)
        {
            context.setUploadFileStatus(Status.Fail)
            context.setShowAlert(true)
        }
    };
    return (
        <div className="input-group mb-3"
             style={{height: "40px", marginTop: "30px", marginBottom: "-30px", backgroundColor: "#272727"}}>
            <input type="file" multiple className="form-control" id="inputGroupFile02"
                   style={{backgroundColor: "#272727", color: "#b2b2b2", borderColor: "#272727"}}
                   onChange={HandleFiles}/>

            <button color="white" className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon02"
                    onClick={HandleUploadButton}>Upload
            </button>
        </div>
    );
}
export default UploadComponentFiles;
