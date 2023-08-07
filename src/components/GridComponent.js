import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import FolderComponent from "./FolderComponent";

const GridComponent = () => {
    const files = [
        {name: 'Dosya 1', url: 'dosya1.pdf'},
        {name: 'Dosya 2', url: 'dosya2.docx'},
        {name: 'Dosya 3', url: 'dosya3.jpg'},
        {name: 'Dosya 4', url: 'dosya3.jpg'},
        {name: 'Dosya 5', url: 'dosya3.jpg'},
        {name: 'Dosya 6', url: 'dosya3.jpg'},
        {name: 'Dosya 7', url: 'dosya3.jpg'},
        {name: 'Dosya 8', url: 'dosya3.jpg'},
        {name: 'Dosya 9', url: 'dosya3.jpg'},
        {name: 'Dosya 10', url: 'dosya3.jpg'},

        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},

        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},

        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},

        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},


        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},


        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},


        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},


        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},

        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},
        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},
        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},
        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},
        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},
        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},
        {name: 'Dosya 11', url: 'dosya1.pdf'},
        {name: 'Dosya 12', url: 'dosya2.docx'},
        {name: 'Dosya 13', url: 'dosya3.jpg'},
        {name: 'Dosya 14', url: 'dosya3.jpg'},
        {name: 'Dosya 15', url: 'dosya3.jpg'},
        {name: 'Dosya 16', url: 'dosya3.jpg'},
        {name: 'Dosya 17', url: 'dosya3.jpg'},
        {name: 'Dosya 18', url: 'dosya3.jpg'},
        {name: 'Dosya 19', url: 'dosya3.jpg'},
        {name: 'Dosya 20', url: 'dosya3.jpg'},
    ];
    return (
        <Container>
            <Row style={{marginLeft: "20px", marginRight: "20px", backgroundColor: "#272727",height: "100%", width: "100%"}} >

                {files.map((file, index) => (
                    <Col key={index} style={{ margin: "5px"}} xs={12} sm={6} md={4} lg={1} >
                        <FolderComponent name={file.name} url={file.url} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default GridComponent;
