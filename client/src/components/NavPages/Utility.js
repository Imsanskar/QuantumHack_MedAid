import React, { useState } from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import BlockText from '../CommonComponents/BlockText'
import UtilityForm from '../SpecificComponents/Forms/UtilityForm'
import QuoteFetcher from '../SpecificComponents/QuoteFetcher'

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
                <BlockText bgColor="#cc0000" icon="" name="daily measurements"
                    onClick={dropDownMeasurement}>
                    Update Your Daily Measurements
                </BlockText>
            </span>
            <span className="hidden-form-mm" hidden>
                <UtilityForm />
            </span>
            <QuoteFetcher />
        </>
    )
}

export default Utility
