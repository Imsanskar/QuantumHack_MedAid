import React, { useState } from 'react';

const ExercisePanel = () => {
    const [totalWorkTime, updatetotalWorkTime] = useState(0);

    const recommended = 45;
    const personal = 60;

    const addFiveMinutes = () => {
        if ((totalWorkTime * 100 / recommended) < 100) {
            updatetotalWorkTime(prevValue => prevValue + 5);
        }   
    }

    return (
        <>
            <div className="container shadow text-left bg-white" style={panelStyle}>
                <div className="row">
                    <div className="col-8">
                        Exercise time:<br />
                        <span style={{fontFamily: "Raleway-Bold"}}>Recomm. - {recommended} mins</span><br />
                        <span style={{fontFamily: "Raleway-Bold"}}>Per. Target - {personal} mins</span>
                    </div>
                    <div className="col-4">
                        Status: <br />
                        {(totalWorkTime * 100 / recommended).toPrecision(3)}% <br />
                        <div style={progressBarInactive}><div style={{ ...progressBarActive, width: `${(totalWorkTime * 100 / recommended)}%` }}></div></div>
                    </div>
                </div>
            </div>
            <button onClick={addFiveMinutes}>Add 5 minutes</button>
        </>
    )
}

const progressBarInactive = {
    backgroundColor: "#ffb3b3",
    display: "block",
    height: "10px",
    width: "100px",
    marginTop: "10px",
}

const progressBarActive = {
    backgroundColor: "#cc0000",
    display: "block",
    height: "10px",
}

const panelStyle = {
    borderRadius: "20px",
    padding: "15px",
    margin: "10px auto",
    fontFamily: "Raleway-Medium",
    fontSize: "18px",
    color: "#cc0000",
}


export default ExercisePanel;
