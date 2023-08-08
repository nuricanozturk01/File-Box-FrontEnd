import React, {useEffect, useState} from "react";
import PdfViewer from "./PdfViewer";
import './PopupComponent.css'
import TextViewer from "./TextViewer";

const PopupComponent = ({viewFile, onClose}) => {
    const [file, setFile] = useState([])
    const [isPdf, setIsPdf] = useState()
    const [isText, setIsText] = useState()
    const [unDefinedType, setUndefinedType] = useState([])

    const setFileType = (file_type) => {

        if (file_type === ".pdf")
            setIsPdf(true)
        else setIsText(true)
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 0x1B)
                onClose();
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);
    useEffect(() => {
        setUndefinedType(false)
        setIsPdf(false)
        setIsText(false)
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
            {isPdf && <PdfViewer file={viewFile}/>}
            {isText && <TextViewer filePath={viewFile}/>}
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
