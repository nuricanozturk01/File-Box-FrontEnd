import {createContext, useState} from "react";


export const Context = createContext();
const ContextProvider = (props) => {
    const [title, setTitle] = useState([])


    return (
        <Context.Provider value={{title, setTitle}}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;
