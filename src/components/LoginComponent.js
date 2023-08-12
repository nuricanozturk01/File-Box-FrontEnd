import React, {useContext, useState} from "react";
import filebox from "../images/filebox_logo.png"
import ValidateUser from "../service/LoginService";
import AlertComponent from "./AlertComponent";
import {Link} from "react-router-dom";
import {FindRootFolderByUserId} from "../service/FindFoldersByUserIdAndFolderId";
import {Context} from "../Context/ContextProvider";



const LoginComponent = () => {

    const [success, setSuccess] = useState("NONE")
    const [response, setResponse] = useState(null)
    const context = useContext(Context)


    const [userInput, setUserInput] = useState({
        username: null, // initial state
        password: null, // initial state
    })

    async function HandleLoginButton() {
        setUserInput({
            ...userInput,
            username: userInput.username,
            password: userInput.password,
        })

        const response = await ValidateUser(userInput);
        // console.log(response)
        localStorage.setItem("token", response.token)
        localStorage.setItem('user_id', response.user_id)
        localStorage.setItem('username', response.username)

        // token
        setResponse(response)
        setSuccess(response.success ? "YES" : "NO")
    }

    function HandlePassword(event) {
        setUserInput({
            ...userInput,
            password: event.target.value,
        })
    }

    function HandleUsername(event) {
        setUserInput({
            ...userInput,
            username: event.target.value,
        })
    }

    const ProtectForm = (event) => {
        event.preventDefault()
    };


    return (

        <div className="container">
            {success === "NO" && success !== "NONE" &&
                <AlertComponent variant="danger" message="User or Password is wrong!" title="FAIL!" prefix=""/>}
            <div className="row d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
                <div className="col-md-6">
                    <form style={{margin: "10px"}} onClick={ProtectForm}>
                        <div className="text-center">
                            <img className="mb-4" style={{border: "5px solid #1C1C1C"}} src={filebox} alt="" width="300"
                                 height="150"/>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="text" className="form-control" id="floatingInput"
                                   style={{backgroundColor: "#272727", color: "#B2B2B2", borderColor: "#808080"}}
                                   placeholder="Username"
                                   onChange={HandleUsername}/>
                            <label style={{color: "#272727"}} htmlFor="floatingInput">Username</label>
                        </div>


                        <div className="form-floating mb-4">
                            <input type="password" onChange={HandlePassword} className="form-control"
                                   id="floatingPassword"
                                   style={{
                                       backgroundColor: "#272727",
                                       color: "#B2B2B2",
                                       height: "10px",
                                       borderColor: "#808080"
                                   }} placeholder="Password"/>

                            <label style={{color: "#272727"}} htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="text-center mb-4">
                            <Link to="/home">
                                <button onClick={HandleLoginButton}
                                        className="btn btn-primary w-10 py-2"
                                        style={{
                                            backgroundColor: "#272727",
                                            color: "#B2B2B2",
                                            borderColor: "#808080"
                                        }}
                                        type="submit">Login
                                </button>
                            </Link>
                            <hr/>
                            <Link to="/forgot-password">
                                <button
                                    className="btn btn-primary w-10 py-2"
                                    style={{
                                        backgroundColor: "#272727",
                                        color: "#B2B2B2",
                                        borderColor: "#808080"
                                    }}
                                    type="submit">Forgot Password
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LoginComponent;
