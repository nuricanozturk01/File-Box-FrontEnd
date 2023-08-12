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
    const [showAlert, setShowAlert] = useState(false)

    return (
        <Context.Provider value={{
            title, setTitle,
            currentFolder, setCurrentFolder,
            rootFolder, setRootFolder,
            folderView, setFolderView,
            fileView, setFileView,
            downloadFolderStatus, setDownloadFolderStatus,
            downloadFileStatus, setDownloadFileStatus,
            showAlert, setShowAlert
        }}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;
