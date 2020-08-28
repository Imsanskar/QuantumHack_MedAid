import React from 'react'

function BlockText(props) {
    const bgColor = props.bgColor;
    const txtColor = bgColor === "white" ? "#cc0000" : "white";
    const txtAlign = props.icon ? "left" : "center";

    return (
        <div className="container shadow text-center"
            style={{ ...blockStyle, backgroundColor: bgColor, color: txtColor, textAlign: txtAlign }}>
            {props.icon ?
                <div className="row align-items-center">
                    <div className="col-11 text-left">{props.children}</div>
                    <div className="col-1"><img src={props.icon} alt={props.name} /></div>
                </div>
                : props.children}
        </div>
    )
}

const blockStyle = {
    borderRadius: "20px",
    padding: "15px",
    margin: "10px auto",
    fontFamily: "Raleway-Medium",
    fontSize: "18px",
}

export default BlockText;