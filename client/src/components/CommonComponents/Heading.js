import React from 'react'

const Heading = ({ headingTitle }) => {
    return (
        <header style={headingStyle}>
            <div>{headingTitle}</div>
            <div className="hrLine" style={{ backgroundColor: "#cc0000" }}></div>
        </header>
    )
}

const headingStyle = {
    color: "#cc0000",
    textAlign: "center",
    width: "50%",
    margin: "auto auto",
    fontSize: "20px",
    padding: "15px 0",
    fontFace: 'Raleway-Regular',
}

export default Heading