import React from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import TodoWrapper from '../CommonComponents/TodoWrapper'

const Student = () => {
    return (
        <div>
            <Navigation />
            <Heading headingTitle="Student" />
            <TodoWrapper title='Study Note #1' flag='student' headingTitle='r/TodayILearned'/>
        </div>
    )
}


export default Student