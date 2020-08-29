import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BlockText from '../CommonComponents/BlockText'

const QuoteFetcher = () => {
    const [quote, updateQuote] = useState({quote: '', author: ''})
    const [onButtonClick, checkButtonClick] = useState(false)

    const getRequestMade = () => {
        checkButtonClick(!onButtonClick)
    }

    useEffect(() => {
        axios
        .get('https://api.quotable.io/random')
        .then( res => {
            console.log(res);
            updateQuote({quote : `${res.data.content}`, author: `${res.data.author}`});
        })
        .catch(err => console.error(err))
    },[onButtonClick])

    return (
        <>
           <span onClick={getRequestMade} style={{cursor: "pointer"}}>
               <BlockText bgColor="#cc0000" icon="" name="motivational">
                   Motivate Me!
               </BlockText>
            </span> 
            <div className="container" style={textStyle}>
                {quote.quote}
                <br/>
                <strong>{quote.author}</strong>
            </div>
        </>
    )
}

const textStyle = {
    color: "#cc0000",
    fontFamily: "Raleway-Medium",
    fontSize: "18px",
}

export default QuoteFetcher
