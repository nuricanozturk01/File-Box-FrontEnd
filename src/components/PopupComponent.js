import React, {useEffect, useState} from "react";
import PdfViewer from "./PdfViewer";
import './PopupComponent.css'

const PopupComponent = ( {viewFile,onClose}) => {

    return (
        <div className="modal-overlay">

            <PdfViewer file={viewFile}/>
            <div className="modal">

               {/* <button onClick={onClose}
                        className="btn btn-primary w-10 py-2"
                        style={{
                            backgroundColor: "#272727",
                            color: "#B2B2B2",
                            borderColor: "#808080"
                        }}
                        type="submit"> Close
                </button>*/}

            </div>
        </div>
    );
}

export default PopupComponent;
