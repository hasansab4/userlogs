import React from 'react';

const backdrop = (props) => {
    let backdrop = {
      height: "100vh",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "1",
      transition:"all .1s"
    };

    return (
        <>
        {props.show ? (<div style={backdrop} onClick={props.clicked}></div>):null}
        </>
    );
}

export default backdrop;

