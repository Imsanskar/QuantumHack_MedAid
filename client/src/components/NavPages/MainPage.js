import React from 'react'
import Navigation from '../CommonComponents/Navigation'

const MainPage = () => {
    return (
        <>
        <Navigation />
        <div style={textStyle}>
            This is MEDAID App.
        </div>
        </>
    )
}

const textStyle = {
    color: "#cc0000",
    fontFamily: "Raleway-Bold",
    fontSize: "20px",
}

export default MainPage
