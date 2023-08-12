import React, {useState} from "react";
import Navbar from "./Navbar";
import OptionsNavBar from "./OptionsNavBar";
import TableComponent from "./TableComponent";
import DragDrop from "./DragDrop";
import MessageComponent from "./MessageComponent";


const MainPage = () =>
{

    const [folder, setFolder] = useState(null)
    const handleFolderClick = (folderId) =>
    {
        setFolder(folderId)
    };


    return (
        <div className="grid" style={{backgroundColor: "#1c1c1c", height: "100v", width: "100v"}}>
            <MessageComponent/>
            <Navbar/>
            <div className="container" style={{padding: "0 0px"}}>
                <div className="row column-gap-12 row-cols-0 row-gap-5 row-cols-md-12 row-cols-lg-12">
                    <DragDrop/>
                    <OptionsNavBar handleFolderClick={handleFolderClick}/>
                    <TableComponent navigateId={folder}/>
                </div>
            </div>
        </div>

    )
}

export default MainPage;
