import React, { useState } from 'react';
import Glass from '../Assets/SVG/liquid.svg';
import LitreBottle from '../Assets/SVG/water-bottle(1).svg';
import LargeBottle from '../Assets/SVG/water-bottle.svg';
import checkMark from '../Assets/SVG/check_circle-24px.svg';
import './CSS/WaterPanel.css';


const WaterPanel = () => {
    const [waterIntake, updateWaterIntake] = useState(0);
    const [prevWaterIntake, updatePrevWaterIntake] = useState(0);

    const waterQuantityAdd = (value) => {
        value = parseFloat(value)
        if (value) {
            updatePrevWaterIntake(waterIntake);
            updateWaterIntake(previousValue => previousValue + value);
        }
        document.querySelector('#customWater').value = "";
    }

    const undoLastStep = () => {
        updateWaterIntake(prevWaterIntake);
    }

    const resetWaterCounter = () => {
        updatePrevWaterIntake(0);
        updateWaterIntake(0);
    }

    return (
        <>
            <div className="container shadow text-center" style={panelStyle}>
                <div className="row align-items-center justify-content-center text-white">
                    <div className="col-lg-5 col-md-4 col-6 text-left">
                        <span style={{ fontFamily: "Raleway-Medium", fontSize: "18px" }}><strong>Water Intake:</strong></span>
                        <br />
                        <span style={{ fontFamily: "Raleway-Bold", fontSize: "26px" }}>{waterIntake} litres</span>
                    </div>
                    <div className="col-lg-1 col-md-1 col-2">
                        <img className="waterButton"
                            src={Glass}
                            alt="500ml glass"
                            style={imgStyle}
                            onClick={() => waterQuantityAdd(0.25)} />
                    </div>
                    <div className="col-lg-1 col-md-1 col-2">
                        <img className="waterButton"
                            src={LitreBottle}
                            alt="1 litre bottle"
                            style={imgStyle}
                            onClick={() => waterQuantityAdd(1)} />
                    </div>
                    <div className="col-lg-1 col-md-1 col-2">
                        <img className="waterButton"
                            src={LargeBottle}
                            alt="2.5 litre bottle"
                            style={imgStyle}
                            onClick={() => waterQuantityAdd(2.5)} />
                    </div>

                    {/* Separator for small screen sizes */}
                    <div className="w-100 d-block d-md-none"></div>

                    {/* Empty element to break column*/}
                    <div className="col-6 d-md-none"></div>
                    <div className="col-lg-3 col-md-3 col-4">
                        <input
                            className="form-control"
                            type="text"
                            id="customWater"
                            name="customWater"
                            placeholder="litres"
                        />
                    </div>
                    <div className="col-lg-1 col-md-1 col-2">
                        <img className="waterButton"
                            src={checkMark}
                            alt="Confirm"
                            style={imgStyle}
                            onClick={() => waterQuantityAdd(document.querySelector('#customWater').value)}
                        />
                    </div>
                </div>
            </div>
            <div className="container align-items-center" style={spanStyle}>
                <span style={{cursor: "pointer"}} onClick={undoLastStep}>Undo Last Step</span>
                |
                <span style={{cursor: "pointer"}} onClick={resetWaterCounter}>Reset Water Counter</span>
            </div>
        </>
    )
}

const panelStyle = {
    borderRadius: "20px",
    padding: "15px",
    margin: "10px auto",
    fontFamily: "Raleway-Medium",
    fontSize: "18px",
    backgroundColor: "#cc0000",
}

const spanStyle = {
    color: "#cc0000", 
    padding: "10px 0",
    fontSize: "18px",
}

const imgStyle = {
    display: "block",
    height: "40px",
    width: "40px",
    cursor: "pointer",
}

export default WaterPanel
