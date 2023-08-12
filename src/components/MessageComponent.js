import {Status} from "../Status";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../Context/ContextProvider";

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

            {context.showAlert && context.downloadFileStatus !== Status.None && context.downloadFileStatus === Status.Success &&
                <div className="alert alert-success" role="alert">Files Uploaded Successfully!</div>}
        </div>
    );
}
export default MessageComponent;
