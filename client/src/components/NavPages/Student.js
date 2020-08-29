import React from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import TodoWrapper from '../CommonComponents/TodoWrapper'
import BlockLink from '../CommonComponents/BlockLink'

const Student = () => {
    return (
        <div>
            <Navigation />
            <Heading headingTitle="Student" />

            <BlockLink name="meditate" bgColor="white"
                urlExternal="https://youtu.be/6oqalQVXObQ">
                5 ways to stay healthy by WHO Director<br />
            </BlockLink>

            <br />

            <BlockLink name="meditate" bgColor="white"
                urlExternal="https://youtu.be/vx4lxmJ8pkg">
                7 Tips from Student Health Services<br />
            </BlockLink>

            <br />

            <BlockLink name="meditate" bgColor="white"
                urlExternal="https://youtu.be/ojF0QrXtQnA">
                How to Manage Stress - Study Tips - Student Mental Health<br />
            </BlockLink>
            <br />
            <BlockLink name="meditate" bgColor="white"
                urlExternal="https://youtu.be/32g5h37U1do">
                Mental Wellness and the University Student<br />
            </BlockLink>
            <br />

            <TodoWrapper title='Study Note #1' flag='student' headingTitle='r/TodayILearned' />
        </div>
    )
}


export default Student