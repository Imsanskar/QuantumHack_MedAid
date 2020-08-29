import React, { useState } from 'react'
import './CSS/HappinessScale.css'

const HappinessScale = () => {
    const [happyCount, updateHappyCount] = useState(5);

    const setHappyCount = e => {
        e.preventDefault();
        const selectedCount = e.target.innerText;
        updateHappyCount(selectedCount);

        const responseText = selectedCount <= 2 ? "Why don't you visit our mental health section for today? We have many things there that can lift your mood" :
            selectedCount > 2 && selectedCount <= 5 ? "Thank you for the response, hope your staying with us will lift your mood for the better." :
                selectedCount > 5 && selectedCount <= 8 ? "Yes it is a lovely day today, isn't it? Why don't you try working out in this happy mood, we've some great recommendations" :
                    "Whoa buddy, are you sure our minds aren't related? Because this is the best day of my life as well!";

        const responseElement = document.querySelector('.response');
        responseElement.hidden = false;
        responseElement.textContent = responseText;

    }

    const buttonArray = Array.from(Array(10),
        (_, index) =>
            <div className="col-2 col-lg-1 py-2">
                <button class="range-button" key={index + 1} onClick={e => setHappyCount(e)}>
                    {index + 1}
                </button>
            </div>)

    return (
        <div className="container shadow text-center" style={containerStyle}>
            <div className="row text-center">
                <div className="col" style={{paddingBottom: "15px"}}>
                    <span style={{fontSize: "20px"}}>On a scale of 1-10, how are you feeling today?</span><br />
                    <strong>1 being extremely sad, 10 being content and happy.</strong>
                </div>
            </div>
            <div className="row justify-content-center">
                {buttonArray}
            </div>
            <div className="response" hidden style={{padding: "15px 0px"}}></div>
        </div>
    )
}

const containerStyle = {
    borderRadius: "20px",
    padding: "15px",
    margin: "10px auto",
    fontFamily: "Raleway-Medium",
    fontSize: "18px",
    backgroundColor: "white",
    color: "#cc0000",
}

export default HappinessScale
