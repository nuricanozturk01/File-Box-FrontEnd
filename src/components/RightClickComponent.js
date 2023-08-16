import React from "react";
import download_image from '../images/download-svgrepo-com.svg'
import rename_image from '../images/rename-svgrepo-com.svg'
import delete_image from '../images/delete-svgrepo-com.svg'
import {MenuItem} from "@react-pdf-viewer/core";

const RightClickComponent = ({download, rename, remove}) =>
{
    return (
        <div style={{backgroundColor: "#272727"}}>
            <MenuItem onClick={download}>
                <img src={download_image} alt="download" width="20px" height="25px" style={{marginRight: "3px"}}/>
                <label style={{color: "#b2b2b2"}}>
                    Download
                </label>
            </MenuItem>

            <MenuItem onClick={rename}>
                <img src={rename_image} alt="rename" width="20px" height="25px" style={{marginRight: "3px"}}/>
                <label style={{color: "#b2b2b2"}}>
                    Rename
                </label>
            </MenuItem>

            <MenuItem onClick={remove}>
                <img src={delete_image} alt="delete" width="20px" height="25px" style={{marginRight: "3px"}}/>
                <label style={{color: "#b2b2b2"}}>
                    Remove
                </label>
            </MenuItem>
        </div>
    );
}
export default RightClickComponent
