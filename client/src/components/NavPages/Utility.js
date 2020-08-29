import React, { useState } from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import BlockText from '../CommonComponents/BlockText'
import UtilityForm from '../SpecificComponents/Forms/UtilityForm'
import QuoteFetcher from '../SpecificComponents/QuoteFetcher'

import { Link } from 'react-router-dom'

const Utility = () => {
    const [menuShow, updateMenuStatus] = useState(false)

    const dropDownMeasurement = () => {
        updateMenuStatus(!menuShow);
        document.querySelector('.hidden-form-mm').hidden = menuShow
    }

    return (
        <>
            <Navigation />
            <Heading headingTitle="Utilites" />
            <span style={{ cursor: "pointer" }}>
                <BlockText bgColor="#cc0000" icon="" name=""
                    onClick={dropDownMeasurement}>
                    Update Your Daily Measurements
                </BlockText>
            </span>
            <span className="hidden-form-mm" hidden>
                <UtilityForm />
            </span>
            <br />
            <Link to="/breathe" style={{textDecoration: "none"}}>
                <BlockText bgColor="white">
                    Try out our 4-7-8 meditation breathing exercise
                </BlockText>
            </Link>
            <br />
            <QuoteFetcher />
        </>
    )
}

export default Utility
