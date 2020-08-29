import React from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import BlockLink from '../CommonComponents/BlockLink'
import testIcon from '../Assets/SVG/account_circle-24px.svg'

const Mental = () => {
    return (
        <div>
            <Navigation />
            <Heading headingTitle="Mental" />

            <BlockLink name="meditate" bgColor="white" icon={testIcon}
                urlExternal="https://youtu.be/rkZl2gsLUp4">
                Need to meditate?<br />
                Check out this meditative playlist we have prepared just for you.
            </BlockLink>
        </div>
    )
}

export default Mental
