import React, {useContext, useEffect, useState} from "react";
import Navbar from "./Navbar";
import OptionsNavBar from "./OptionsNavBar";
import TableComponent from "./TableComponent";



const MainPage = () => {
    const [folder, setFolder] = useState(null)

    const handleFolderClick =  (folderId) => {
        setFolder(folderId)
    };
    return (
        <div className="grid" style={{backgroundColor: "#1c1c1c", height: "100v", width: "100%"}}>
            <Navbar/>
            <div className="container" style={{padding: "0 0px"}}>
                <div className="row column-gap-12 row-cols-0 row-gap-5 row-cols-md-12 row-cols-lg-12">
                    <OptionsNavBar handleFolderClick={handleFolderClick}/>
                    <TableComponent navigateId={folder}/>
                </div>
            </div>
        </div>

    )
}

export default MainPage;
