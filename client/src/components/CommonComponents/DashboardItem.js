import React from 'react'

const DashboardItem = ({ itemName, itemImage, itemInfo }) => {
    return (
        <div style={itemStyle}>
            <p style={itemHeaderStyle}>{itemName}</p>
            <p><img src={itemImage} style={imgStyle} alt={itemName}/></p>
            <p style={itemDescriptionStyle}>{itemInfo}</p>
        </div>
    )
}

const itemStyle = {
    backgroundColor: "#cc0000",
    borderRadius: "20px",
    color: "white",
    padding: "10px",
    margin: "5px",
    width: "350px",
}

const imgStyle = {
    filter: "invert(1)",
    webkitFilter: "invert(1)",
    height: "40px",
    width: "40px",
    display: "block",
    margin: "auto auto",
};

const itemHeaderStyle = {
    fontFamily: 'Raleway-Bold',
    // fontWeight: '700',
    fontSize: '25px',
}

const itemDescriptionStyle = {
    fontFamily: 'Raleway-Medium',
    // fontWeight: '500',
    fontSize: '18px',
}

export default DashboardItem;
