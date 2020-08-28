import React from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import ExerciseForm from '../SpecificComponents/ExerciseForm'
import TodoWrapper from '../CommonComponents/TodoWrapper'

const Physical = () => {
    const flag = 'exercise'
    return (
        <div>
            <Navigation />
            <Heading headingTitle="Physical" />
            <TodoWrapper title='' flag={flag} />
        </div>
    )
}

export default Physical