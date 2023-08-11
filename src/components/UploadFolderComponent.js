import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../Context/ContextProvider";
import {FindRootFolderByUserId} from "../service/FindFoldersByUserIdAndFolderId";
import {UploadFiles, UploadFolders} from "../service/UploadService";
const UploadFolderComponent = (folderId) => {
    const [rootFolder, setRootFolder] = useState(1)
    const directoryRef = useRef(null);
    const context = useContext(Context)

    useEffect(() => {
        const findRoot = async () => {
            const root = await FindRootFolderByUserId();
            setRootFolder(root.folder_id)
        }
        findRoot()

    }, [])
    useEffect(() => {
        if (directoryRef.current !== null) {
            directoryRef.current.setAttribute("directory", "");
            directoryRef.current.setAttribute("webkitdirectory", "");
        }
    }, [directoryRef]);

    const HandleAndSubmitFolder = async (event) => {
        console.log(event.target.files)
        let folderId = await rootFolder;

        if (context.currentFolder && context.currentFolder.folderId)
            folderId = context.currentFolder.folderId

        //await UploadFolders(folderId, event.target.files)
    };
    return (
        <div>
            <input
                   multiple
                   type="file"
                   ref={directoryRef}
                   onChange={HandleAndSubmitFolder}
            />
        </div>
    );
}
export default UploadFolderComponent;
