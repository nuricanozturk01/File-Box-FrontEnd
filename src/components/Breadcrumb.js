import {createContext, useState} from "react";

export const BreadCrumbContext = createContext();
const Breadcrumb = (props) => {
    const [navigateFolder, setNavigateFolder] = useState(-1)

    return (
        <BreadCrumbContext.Provider value={{navigateFolder, setNavigateFolder}}>
            {props.children}
        </BreadCrumbContext.Provider>
    )
}
export default Breadcrumb;
