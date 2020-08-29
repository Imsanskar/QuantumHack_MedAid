import React, { useState, useEffect } from 'react'
import './CSS/Breathe.css'

// Practice the 4-7-8 breathing technique

const Breathe = () => {
    const [guideText, updateGuideText] = useState('Please get ready')

    const inhaleTime = 4000;
    const holdTime = 7000;
    const exhaleTime = 8000;

    const breathe478 = (element) => {
        updateGuideText("Inhale");
        element.className = "circle-container large";

        setTimeout(() => {
            updateGuideText("Hold");

            setTimeout(() => {
                updateGuideText("Exhale");
                element.className = "circle-container reduce";

            }, holdTime)
        }, inhaleTime)
    }

    useEffect(() => {
        const element = document.querySelector('.circle-container');
        const timer = setInterval(() => breathe478(element), exhaleTime + inhaleTime + holdTime);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="whole-page">
            <div className="circle-container">
                <div className="circle">
                    <div className="innerCircle">
                        {guideText}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breathe
