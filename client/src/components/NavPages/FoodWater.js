import React from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import WaterPanel from '../SpecificComponents/WaterPanel'
import TodoWrapper from '../CommonComponents/TodoWrapper'
import BlockLink from '../CommonComponents/BlockLink'

const FoodWater = () => {
    return (
        <>
            <Navigation />
            <Heading headingTitle="Food and Water" />
            <WaterPanel />
            <br />
            <BlockLink urlExternal="https://www.myfitnesspal.com/" bgColor="white" icon="" name="">
                Check out this website if you are having trouble counting calories.<br />
                <strong><em>My Fitness Pal</em></strong>
            </BlockLink>
            <br />
            <TodoWrapper flag='foodWater' headingTitle='Activity for today'/>
        </>
    )
}


export default FoodWater