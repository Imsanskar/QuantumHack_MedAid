import React from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import WaterPanel from '../SpecificComponents/WaterPanel'
import TodoWrapper from '../CommonComponents/TodoWrapper'

const FoodWater = () => {
    return (
        <>
            <Navigation />
            <Heading headingTitle="Food and Water" />
            <WaterPanel />

            <TodoWrapper flag='foodWater' />
        </>
    )
}


export default FoodWater