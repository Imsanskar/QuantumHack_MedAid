import React from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import BlockLink from '../CommonComponents/BlockLink'
import testIcon from '../Assets/SVG/account_circle-24px.svg'
import HappinessScale from '../SpecificComponents/HappinessScale'

const Mental = () => {
    return (
        <div>
            <Navigation />
            <Heading headingTitle="Mental" />

            <HappinessScale />

            <BlockLink name="meditate" bgColor="white" icon={testIcon}
                urlExternal="https://youtu.be/rkZl2gsLUp4">
                Need to meditate?<br />
                Check out this meditative playlist we have prepared just for you.
            </BlockLink>

            <BlockLink name="meditate" bgColor="white" icon={testIcon}
                urlExternal="https://youtu.be/-GXfLY4-d8w">
                Feelng anxious ?<br />
                Check out this motivation playlist we have prepared just for you.
            </BlockLink>

        </div>
    )
}

export default Mental
