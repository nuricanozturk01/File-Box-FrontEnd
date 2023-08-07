import React from "react";

const FolderComponent = ({name, url}) => {

    return (
        <div style={{margin: "5px"}}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        </div>);
}

export default FolderComponent;
