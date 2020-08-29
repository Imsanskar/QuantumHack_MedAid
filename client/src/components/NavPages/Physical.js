import React from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import TodoWrapper from '../CommonComponents/TodoWrapper'
import ExercisePanel from '../SpecificComponents/ExercisePanel'

const Physical = () => {
    const flag = 'exercise'
    return (
        <div>
            <Navigation />
            <Heading headingTitle="Physical" />
            <ExercisePanel />
            <TodoWrapper title='' headingTitle='Activity for today' flag={flag} />
        </div>
    )
}

export default Physical