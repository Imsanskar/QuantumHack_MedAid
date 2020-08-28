import React, { useState } from 'react';
import Glass from '../Assets/SVG/liquid.svg';
import LitreBottle from '../Assets/SVG/water-bottle(1).svg';
import LargeBottle from '../Assets/SVG/water-bottle.svg';
import checkMark from '../Assets/SVG/check_circle-24px.svg';
import './WaterPanel.css';


const WaterPanel = () => {
    const [waterIntake, updateWaterIntake] = useState(0);

    const waterQuantityAdd = (value) => {
        value = parseFloat(value)
        if (value) {
            updateWaterIntake(previousValue => previousValue + value)
        }
        document.querySelector('#customWater').value = "";
    }

    return (
        <div className="container shadow text-center" style={panelStyle}>
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-3 text-left">
                    <span style={{ fontFamily: "Raleway-Medium", fontSize: "18px" }}><strong>Water Intake:</strong></span>
                    <br />
                    <span style={{ fontFamily: "Raleway-Bold", fontSize: "26px" }}>{waterIntake} litres</span>
                </div>
                <div className="col-lg-1 col-md-1">
                    <img className="waterButton"
                        src={Glass}
                        alt="500ml glass"
                        style={imgStyle}
                        onClick={() => waterQuantityAdd(0.25)} />
                </div>
                <div className="col-lg-1 col-md-1">
                    <img className="waterButton"
                        src={LitreBottle}
                        alt="1 litre bottle"
                        style={imgStyle}
                        onClick={() => waterQuantityAdd(1)} />
                </div>
                <div className="col-lg-1 col-md-1">
                    <img className="waterButton"
                        src={LargeBottle}
                        alt="2.5 litre bottle"
                        style={imgStyle}
                        onClick={() => waterQuantityAdd(2.5)} />
                </div>
                <div className="col-lg-3 col-md-3">
                    <input
                        className="form-control"
                        type="text"
                        id="customWater"
                        name="customWater"
                        placeholder="litres"
                    />
                </div>
                <div className="col-lg-1 col-md-3">
                    <img className="waterButton"
                        src={checkMark}
                        alt="Confirm"
                        style={imgStyle}
                        onClick={() => waterQuantityAdd(document.querySelector('#customWater').value)}
                    />
                </div>
            </div>
        </div>

    )
}

const panelStyle = {
    borderRadius: "20px",
    padding: "15px",
    margin: "10px auto",
    fontFamily: "Raleway-Medium",
    fontSize: "18px",
    backgroundColor: "#cc0000",
    color: "white",
}

const imgStyle = {
    display: "block",
    height: "40px",
    width: "40px",
    cursor: "pointer",
}

export default WaterPanel