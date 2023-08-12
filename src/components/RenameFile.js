import React, {useEffect, useState} from "react";
import {RenameFileWithFileId} from "../service/RenameService";
import './DropDown.css'

const RenameFile = ({file}) =>
{
    const [newFileName, setNewFileName] = useState()
    const [renameFile, setRenameFile] = useState(null)

    useEffect(() =>
    {
        setRenameFile(file)
    }, [file])

    const HandleNewFileName = (event) =>
    {
        setNewFileName(event.target.value)
    };
    const HandleSubmitButton = async () =>
    {
        await RenameFileWithFileId(renameFile.file_id, newFileName)
    };


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="form-floating mb-4" style={{position: "relative"}}>

                <label
                    htmlFor="floatingInput"
                    style={{
                        backgroundColor: "#1c1c1c",
                        color: "#b2b2b2",
                        marginBottom: "0px",
                        position: "inherit",
                        top: "50%",
                        left: "50%",
                        borderColor: "#b2b2b2",
                        transform: "translate(-50%, -50%)"
                    }}>
                    Please Enter the New File Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    style={{
                        backgroundColor: "#272727",
                        color: "#B2B2B2",
                        borderColor: "#808080",
                        width: "400px"
                    }}
                    placeholder="New File Name"
                    onChange={HandleNewFileName}
                />

            </div>

            <button
                onClick={HandleSubmitButton}
                className="btn btn-primary py-2"
                style={{
                    width: "150px",
                    backgroundColor: "#272727",
                    color: "#B2B2B2",
                    borderColor: "#808080",
                }} type="submit">
                Rename
            </button>
        </div>
    );
}

export default RenameFile;
