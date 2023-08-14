import {createContext, useState} from "react";
import {Status} from "../Status";


export const Context = createContext();
const ContextProvider = (props) => {
    const [title, setTitle] = useState([])
    const [currentFolder, setCurrentFolder] = useState()
    const [rootFolder, setRootFolder] = useState()
    const [folderView, setFolderView] = useState([]);
    const [fileView, setFileView] = useState([]);

    const [downloadFolderStatus, setDownloadFolderStatus] = useState(Status.None)
    const [downloadFileStatus, setDownloadFileStatus] = useState(Status.None)
    const [uploadFileStatus, setUploadFileStatus] = useState(Status.None)
    const [loginStatus, setLoginStatus] = useState(Status.None)
    const [showAlert, setShowAlert] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0)
    const [downloadProgress, setDownloadProgress] = useState(0)
    const [isUpload, setIsUpload] = useState(false)
    return (
        <Context.Provider value={{
            title, setTitle,
            currentFolder, setCurrentFolder,
            rootFolder, setRootFolder,
            folderView, setFolderView,
            fileView, setFileView,
            downloadFolderStatus, setDownloadFolderStatus,
            downloadFileStatus, setDownloadFileStatus,
            uploadFileStatus, setUploadFileStatus,
            showAlert, setShowAlert,
            loginStatus, setLoginStatus,
            uploadProgress, setUploadProgress,
            downloadProgress, setDownloadProgress,
            isUpload, setIsUpload
        }}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;
