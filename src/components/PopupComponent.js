import React, {useEffect, useState} from "react";
import PdfViewer from "./PdfViewer";
import './PopupComponent.css'

const PopupComponent = ( {viewFile,onClose}) => {
    const [file, setFile] = useState([])
    const [isPdf, setIsPdf] = useState()
    const [unDefinedType, setUndefinedType] = useState([])

    const setFileType = (file_type) => {
        if (file_type === ".pdf")
            setIsPdf(true)

        else setUndefinedType(true)
    };


    useEffect(() => {
        setUndefinedType(false)
        const load = async () => {
            try {
                setFile(viewFile);
            } catch (error) {
                console.error("Error while setting pdfFile:", error);
            }
        };
        load();
        setFileType(file.file_type)
    }, [file, viewFile, viewFile.file]);



    return (
        <div className="modal-overlay">
            {isPdf &&  <PdfViewer file={viewFile}/>}
            
            {unDefinedType && <h2 style={{color: "white"}}>Undefined file type!</h2>}


            <button onClick={onClose}
                    className="btn btn-primary w-10 py-2 close-button"
                    style={{
                        backgroundColor: "#272727",
                        color: "#B2B2B2",
                        borderColor: "#808080"
                    }}
                    type="submit"> Close
            </button>
            <div className="modal">


            </div>
        </div>
    );
}

export default PopupComponent;
