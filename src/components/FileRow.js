import React from 'react';
import {Dropdown} from "react-bootstrap";
import pdf_file from "../images/filetype-pdf.svg"
import js_file from "../images/javascript-svgrepo-com.svg"
import word_file from "../images/word2-svgrepo-com.svg"
import dat_file from "../images/dat-svgrepo-com.svg"
import exe_file from "../images/exe-svgrepo-com.svg"
import dll_file from "../images/dll-svgrepo-com.svg"
import bash_file from "../images/bash-icon-svgrepo-com.svg"
import code_file from "../images/code-svgrepo-com.svg"
import java_file from "../images/java-svgrepo-com.svg"
import file_image from "../images/file-svgrepo-com.svg";
import image_image from "../images/image-photo-svgrepo-com.svg";
import video_image from "../images/video-course-svgrepo-com.svg";
import music_image from "../images/music-svgrepo-com.svg";
import text_image from "../images/clipboard-list-svgrepo-com.svg";
import zip_image from "../images/zip-svgrepo-com.svg";
import {RemoveFileWithFileId} from "../service/RemoveService";
import {DownloadFile} from "../service/DownloadService";

const FileRow = ({file, handleFile, handleRenameFile}) => {
    const HandleDownloadFile = async (file) => {
        await DownloadFile(file)
    };

    const HandleRemoveFile = async (file) => {
        await RemoveFileWithFileId(file.file_id)
    };
    const determineFileImage = () => {
        if (file.file_type === '.pdf') {
            return pdf_file;
        } else if (file.file_type === '.java') {
            return java_file;
        } else if (['.jpg', '.png'].includes(file.file_type)) {
            return image_image;
        }else if (['.mp4'].includes(file.file_type)) {
            return video_image;
        }
        else if (['.mp3'].includes(file.file_type)) {
            return music_image;
        }
        else if (['.txt'].includes(file.file_type)) {
            return text_image;
        }
        else if (['.zip', '.rar'].includes(file.file_type)) {
            return zip_image;
        }
        else if (['.js'].includes(file.file_type)) {
            return js_file;
        }
        else if (['.sh'].includes(file.file_type)) {
            return bash_file;
        }
        else if (['.cs', '.pdb', '.json'].includes(file.file_type)) {
            return code_file;
        }
        else if (['.dat'].includes(file.file_type)) {
            return dat_file;
        }
        else if (['.dll'].includes(file.file_type)) {
            return dll_file;
        }
        else if (['.docx'].includes(file.file_type)) {
            return word_file;
        }
        else if (['.exe'].includes(file.file_type)) {
            return exe_file;
        }
        return file_image;
    };

    return (
        <tr>


            <td style={{verticalAlign: "middle", backgroundColor: "#272727"}}>
                <a onClick={() => handleFile(file)} style={{display: "flex", alignItems: "center"}}>

                    <img src={determineFileImage()} style={{marginRight: "5px"}} alt="file" height="50" width="50"/>
                    <label style={{
                        color: "#b2b2b2",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "500px"
                    }}>
                        {file.file_name}
                    </label>
                </a>
            </td>


            <td style={{
                verticalAlign: "middle",
                textAlign: "center",
                backgroundColor: "#272727",
                whiteSpace: "normal"
            }}>
                <label style={{color: "#b2b2b2", marginLeft: "20px", whiteSpace: "normal"}}>
                    {file.created_date}
                </label>
            </td>


            <td style={{verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727"}}>
                <label style={{color: "#b2b2b2", marginLeft: "20px"}}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""/>
                    </div>
                </label>
            </td>


            <td style={{verticalAlign: "middle", textAlign: "center", backgroundColor: "#272727"}}>
                <label style={{color: "#b2b2b2", textAlign: "center"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Dropdown data-bs-theme="dark">
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{
                                width: "100px",
                                height: "30px",
                                backgroundColor: "#272727",
                                borderColor: "#272727"
                            }}>
                                ...
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item style={{backgroundColor: "#272727"}}
                                               onClick={() => HandleDownloadFile(file)}
                                               href="#">Download</Dropdown.Item>
                                <Dropdown.Item style={{backgroundColor: "#272727"}}
                                               onClick={() => handleRenameFile(file)} href="#">Rename</Dropdown.Item>
                                <Dropdown.Item style={{backgroundColor: "#272727"}}
                                               onClick={() => HandleRemoveFile(file)} href="#">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </label>
            </td>
        </tr>
    );
};

export default FileRow;
