import React, {useState} from "react";
import filebox from "../images/filebox_logo.png"
import MainPage from "./MainPage";

const LoginComponent = () => {
    const [success, setSuccess] = useState(false)

    function HandleLoginButton() {
        setSuccess(true)
    }

    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
                <div className="col-md-6">
                    <form style={{margin: "10px"}}>
                        <div className="text-center">
                            <img className="mb-4" style={{border: "5px solid #1C1C1C"}} src={filebox} alt="" width="300" height="150"/>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="text" className="form-control" id="floatingInput"
                                   style={{backgroundColor: "#272727", color: "#B2B2B2", borderColor: "#808080"}}
                                   placeholder="Username"/>
                            <label style={{color: "#272727"}} htmlFor="floatingInput">Username</label>
                        </div>


                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="floatingPassword"
                                   style={{
                                       backgroundColor: "#272727", color: "#B2B2B2",
                                       height: "10px", borderColor: "#808080"
                                   }} placeholder="Password"/>

                            <label style={{color: "#272727"}} htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="text-center mb-4">
                            <button onClick={HandleLoginButton}
                                    className="btn btn-primary w-10 py-2"
                                    style={{backgroundColor: "#272727", color: "#B2B2B2", borderColor: "#808080"}}
                                    type="submit">Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {success && <MainPage/>}
        </div>
    );
};

export default LoginComponent;
