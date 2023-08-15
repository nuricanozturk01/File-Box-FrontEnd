import React from "react";

const RightClickComponent = ({download ,rename,remove}) =>{
    return (
      <div>
          <div style={{backgroundColor: "#272727"}}>
              <button onClick={download}
                      className="btn btn-primary w-10 py-2"
                      style={{
                          backgroundColor: "#272727",
                          color: "#B2B2B2",
                          borderColor: "#272727"
                      }}
                      type="submit"> Download
              </button>
              <br/>
              <button onClick={rename}
                      className="btn btn-primary w-10 py-2"
                      style={{
                          backgroundColor: "#272727",
                          color: "#B2B2B2",
                          borderColor: "#272727"
                      }}
                      type="submit"> Rename
              </button>
              <br/>
              <button

                      onClick={remove}
                      className="btn btn-primary w-10 py-2"
                      style={{
                          backgroundColor: "#272727",
                          color: "#B2B2B2",
                          borderColor: "#272727"
                      }}
                      type="submit"> Delete
              </button>
          </div>
      </div>
    );
}
export default RightClickComponent
