import React from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import SettingsForm from '../SpecificComponents/SettingsForm'

const Settings = () => {
    return (
        <>
            <Navigation />
            <Heading headingTitle="Settings" />
            <SettingsForm />
        </>
    )
}

export default Settings 