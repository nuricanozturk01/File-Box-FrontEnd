import React, {Component, useEffect, useState} from "react";
import Navbar from "./Navbar";
import GridComponent from "./GridComponent";
import OptionsNavBar from "./OptionsNavBar";
import TableComponent from "./TableComponent";


const MainPage = () => {

    const [isList, setIsList] = useState(false);

    const updateSetList = (data) => {
        setIsList(data);
    };

    return (
        <div className="grid" style={{backgroundColor: "#1c1c1c", height: "100v", width: "100%"}}>
            <Navbar/>
            <div className="container" style={{padding: "0 0px"}}>
                <div className="row column-gap-12 row-cols-0 row-gap-5 row-cols-md-12 row-cols-lg-12">
                    <OptionsNavBar viewMode={updateSetList}/>
                    <TableComponent/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
