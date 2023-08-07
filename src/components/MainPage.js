import React from "react";
import Navbar from "./Navbar";
import GridComponent from "./GridComponent";
import OptionsNavBar from "./OptionsNavBar";
import TableComponent from "./TableComponent";

const MainPage = () => {
    return (
        <div className="grid" style={{backgroundColor:"#272727"}}>
            <Navbar/>
            <div className="container" style={{padding: "0 0px"}}>
                <div className="row column-gap-12 row-cols-0 row-gap-5 row-cols-md-12 row-cols-lg-12">
                    <br/>
                    <OptionsNavBar/>
                    <GridComponent/>
                </div>
            </div>
        </div>
    )
}
export default MainPage;
