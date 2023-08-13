import React, {useContext, useEffect, useState} from "react";
import {UploadFiles} from "../service/UploadService";
import {Context} from "../Context/ContextProvider";
import {FindRootFolderByUserId} from "../service/FindFoldersByUserIdAndFolderId";
import {Status} from "../Status";

const DragDrop = () =>
{

    const [dragging, setDragging] = useState(false);
    const context = useContext(Context)
    const [rootFolder, setRootFolder] = useState()

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            const rootFolder = await FindRootFolderByUserId(localStorage.getItem('user_id'))
            setRootFolder(rootFolder)
        }

        fetchData()

    }, [])


    const handleDragEnter = (e) =>
    {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) =>
    {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDragOver = (e) =>
    {
        e.preventDefault();
        e.stopPropagation();
    };
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
    const handleDrop = async (e) =>
    {
        try
        {
            e.preventDefault();
            e.stopPropagation();
            setDragging(false);

            const files = [...e.dataTransfer.files];

            let folderId = await rootFolder.folder_id;

            if (context.currentFolder)
                folderId = context.currentFolder.folderId

            const response = await UploadFiles(folderId, files)
            context.setUploadFileStatus(Status.Success)
            context.setShowAlert(true)
            await loadData(response)
        }
        catch (error)
        {
            context.setUploadFileStatus(Status.Fail)
            context.setShowAlert(true)
        }
    };

    return (
        <div
            className="drag-drop-container"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{
                marginTop: "4%"
            }}
        >
            <p style={{color: "#a0a0a0"}}>Please Drag And Drop Files</p>
            <style>{`
              .drag-drop-container {
                border: 2px dashed #a0a0a0;
                border-radius: 5px;
                padding: 20px;
                text-align: center;
                opacity: ${dragging ? 1 : 0.4};
                transition: opacity 0.1s;
              }
            `}</style>
        </div>
    );
}
export default DragDrop;
