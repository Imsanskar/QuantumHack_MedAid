import React from 'react';

function BlockLink(props) {
    const bgColor = props.bgColor;
    const txtColor = bgColor === "white" ? "#cc0000" : "white";
    const txtAlign = props.icon ? "left" : "center"; 
    return (
        <a className="container shadow text-center"
            style={{ ...linkStyling, backgroundColor: bgColor, color: txtColor, textAlign: txtAlign }} href={props.urlExternal}
            target="_blank"
            rel="noopener noreferrer">
            {props.icon ?
                <div className="row align-items-center">
                    <div className="col-11 text-left">{props.children}</div>
                    <div className="col-1"><img src={props.icon} alt={props.name} /></div>
                </div>
                : props.children}
        </a>
    )
}

const linkStyling = {
    display: "block",
    borderRadius: "20px",
    padding: "15px",
    margin: "10px auto",
    textDecoration: "none",
    fontFamily: "Raleway-Medium",
    fontSize: "18px",
}


export default BlockLink;


