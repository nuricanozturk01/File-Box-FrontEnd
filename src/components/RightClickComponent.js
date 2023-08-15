import React, {useState} from "react";


const RightClickComponent = ({download, rename, remove}) =>
{
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () =>
    {
        setHovered(true);
    };

    const handleMouseLeave = () =>
    {
        setHovered(false);
    };
    const buttonStyle = {
        borderColor: "#272727",
        backgroundColor: hovered ? '#353535' : '#272727',
        color: '#b2b2b2',
        width: "90px",
        textAlign: "center",
        transition: 'background-color 0.3s ease',
    };
    return (
        <div>
            <div style={{backgroundColor: "#272727"}}>
                <button onClick={download}

                        className="btn btn-primary w-10 py-2"
                        style={buttonStyle}
                        onMouseOver={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        type="submit"> Download
                </button>

                <br/>

                <button onClick={rename}
                        className="btn btn-primary w-10 py-2"
                        style={buttonStyle}
                        onMouseOver={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        type="submit"> Rename
                </button>

                <br/>

                <button

                    onClick={remove}
                    className="btn btn-primary w-10 py-2"
                    style={buttonStyle}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    type="submit"> Delete
                </button>
            </div>
        </div>
    );
}
export default RightClickComponent
