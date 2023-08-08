import React from "react";
import file_image from '../images/file.png'


const FileComponent = ({name, type, creationDate}) => {

    return (
        <div style={{display: "inline-block", textAlign: "center"}}>
            <a href="/">
                <img src={file_image} alt="folder" height="100px" width="100px" style={{display: "block"}}/>
                <label style={{color: "#b2b2b2", textAlign: "center"}}>{name}</label>
            </a>
        </div>
    );
}

export default FileComponent;
