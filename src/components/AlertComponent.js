import React from "react";
import {Alert} from "react-bootstrap";

const AlertComponent = ({variant, title, message, prefix}) => {
    return (
        <Alert variant={variant}>
            <Alert.Heading>{title}</Alert.Heading>
            <p>{prefix +  message}</p>
        </Alert>
    );
}

export default AlertComponent;
