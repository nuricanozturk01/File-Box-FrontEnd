import './App.css';
import MainPage from "./components/MainPage";
import LoginComponent from "./components/LoginComponent";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PasswordChangeScreen from "./components/PasswordChangeScreen";
import ContextProvider from "./Context/ContextProvider";
import React from "react";
import MessageComponent from "./components/MessageComponent";


const router = createBrowserRouter([
    {path: '/', element: <LoginComponent/>},
    {path: '/forgot-password', element: <ForgotPasswordComponent/>},
    {path: '/reset-password-request', element: <PasswordChangeScreen/>},
    {path: '/home', element: <MainPage/>}

])


function App() {
    return (
       <ContextProvider>
           <div className="page-item" style={{backgroundColor: "#1C1C1C", height: "100vh"}}>
               <MessageComponent/>
               <RouterProvider router={router}/>
           </div>
       </ContextProvider>
    );
}

export default App;
