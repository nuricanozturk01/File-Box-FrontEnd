import {Status} from "../Status";
import React, {useContext, useEffect} from "react";
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
            {context.loginStatus !== Status.None && context.loginStatus === Status.Fail &&
                <div className="alert alert-danger" role="alert">Please controle the username and password</div>}

        </div>
    );
}
export default MessageComponent;
