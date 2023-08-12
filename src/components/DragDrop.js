import React, {useContext, useEffect, useState} from "react";
import {UploadFiles} from "../service/UploadService";
import {Context} from "../Context/ContextProvider";
import {FindRootFolderByUserId} from "../service/FindFoldersByUserIdAndFolderId";

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

    const handleDrop = async (e) =>
    {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        console.log(rootFolder)
        const files = [...e.dataTransfer.files];

        let folderId = await rootFolder.folder_id;
        console.log(context.currentFolder)
        if (context.currentFolder)
            folderId = context.currentFolder.folderId

        await UploadFiles(folderId, files)
        console.log('Dropped files:', files);
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
