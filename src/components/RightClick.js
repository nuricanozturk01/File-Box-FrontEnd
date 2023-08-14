import {useEffect, useState} from "react";

const RightClick = ({isFile, isFolder, onClose, renameFile, renameFolder, isNewFolder}) => {
    useEffect(() =>
    {
        const handleKeyDown = (event) =>
        {
            if (event.keyCode === 0x1B) //esc
                onClose();
        };

        document.addEventListener('keydown', handleKeyDown);

        return () =>
        {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);
    const [context, setContext] = useState(false);
    const [xYPosistion, setXyPosistion] = useState({ x: 0, y: 0 });
    const showNav = (event) => {
        event.preventDefault();
        setContext(false);
        const positionChange = {
            x: event.pageX,
            y: event.pageY,
        };
        setXyPosistion(positionChange);
        setContext(true);
    };
    const hideContext = (event) => {
        setContext(false);
    };
    const [chosen, setChosen] = useState();
    const initMenu = (chosen) => {
        setChosen(chosen);
    };
    return (
        <>
            <h2 className="mb-3">React Right Click Context Menu Example</h2>
            <div
                className="contextContainer"
                onContextMenu={showNav}
                onClick={hideContext}
            >
                {chosen && <h1>"{chosen}" is chosen</h1>}
                {context && (
                    <div
                        style={{ top: xYPosistion.y, left: xYPosistion.x }}
                        className="rightClick"
                    >
                        <div className="menuElement" onClick={() => initMenu("Refactor")}>
                            Refactor
                        </div>
                        <div className="menuElement" onClick={() => initMenu("Cut")}>
                            Cut
                        </div>
                        <div className="menuElement" onClick={() => initMenu("Copy")}>
                            Copy
                        </div>
                        <div className="menuElement" onClick={() => initMenu("Paste")}>
                            Paste
                        </div>
                    </div>
                )}
            </div>
        </>
    );

}
export default RightClick;
