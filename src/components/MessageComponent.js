import {Status} from "../Status";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../Context/ContextProvider";
import {Navigate} from "react-router-dom";

const MessageComponent = () =>
{

    const context = useContext(Context)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>
    {
        if (context.showAlert)
        {
            const timer = setTimeout(() =>
            {
                context.setShowAlert(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [context.showAlert]);


    return (
        <div>
            {context.showAlert && context.downloadFolderStatus !== Status.None && context.downloadFolderStatus === Status.Success &&
                <div className="alert alert-success" role="alert">Folder Downloaded Successfully!</div>}

            {context.showAlert && context.uploadFileStatus !== Status.None && context.uploadFileStatus === Status.Success &&
                <div className="alert alert-success" role="alert">Files Uploaded Successfully!</div>}

            {context.loginStatus !== Status.None && context.loginStatus === Status.Fail &&
                <div className="alert alert-danger" role="alert">Please controle the username and password</div>}

        </div>
    );
}
export default MessageComponent;
