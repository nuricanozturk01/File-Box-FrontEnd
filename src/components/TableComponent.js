import React from "react";
import {Table} from "react-bootstrap";


const TableComponent = () => {

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>File Name</th>
                <th>File Size</th>
                <th>Created Date</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>


            <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>


            <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            </tbody>
        </Table>
    );

}

export default TableComponent;
