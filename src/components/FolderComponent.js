import React from "react";
import folder_image from "../images/folder.png"
const FolderComponent = ({name, path, creationDate, url, isTable}) => {

    return (
        <div style={{display: "inline-block", textAlign: "center"}} >
            <img src={folder_image} alt="folder" height="100px" width="100px" style={{display: "block"}}/>
            <label style={{color: "#b2b2b2", textAlign: "center"}}>{name}</label>

        </div>
        );
}

export default FolderComponent;
