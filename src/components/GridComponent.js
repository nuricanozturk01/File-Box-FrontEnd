import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import FolderComponent from "./FolderComponent";
import {FindFilesOnFolder, FindFoldersByUserIdAndFolderId} from "../service/FindFoldersByUserIdAndFolderId";
import FileComponent from "./FileComponent";

const GridComponent = () => {
    const [folderView, setFolderView] = useState([]);
    const [fileView, setFileView] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const folders = await FindFoldersByUserIdAndFolderId(1);
            const files = await FindFilesOnFolder(1)
            setFolderView(folders)
            setFileView(files)
        }
        fetchData()
    }, [])
    const HandleFolderClick = async (folderId) => {
        const folders = await FindFoldersByUserIdAndFolderId(folderId);
        const files = await FindFilesOnFolder(folderId)
        setFolderView(folders)
        setFileView(files)
    };
    return (
        <Container>
            <Row style={{
                marginLeft: "20px",
                marginRight: "20px",
                backgroundColor: "#272727",
                height: "100%",
                width: "100%"
            }}>
                {folderView.map((folder, index) => (
                    <Col key={index} style={{margin: "auto"}} xs={12} sm={6} md={4} lg={1}>
                        <a onClick={() => HandleFolderClick(folder.folderId)}>
                            <FolderComponent name={folder.folderName} url={folder.creationDate}/>
                        </a>
                    </Col>
                ))}

                {fileView.map((file, index) => (
                    <Col key={index} style={{margin: "1rem"}} xs={12} sm={6} md={4} lg={1}>
                        <a>
                            <FileComponent name={file.file_name} url={file.created_date}/>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default GridComponent;
