import {createContext, useState} from "react";


export const Context = createContext();
const ContextProvider = (props) => {
    const [title, setTitle] = useState([])
    const [currentFolder, setCurrentFolder] = useState()
    const [rootFolder, setRootFolder] = useState()

    return (
        <Context.Provider value={{title, setTitle,
            currentFolder, setCurrentFolder,
            rootFolder, setRootFolder}}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;
