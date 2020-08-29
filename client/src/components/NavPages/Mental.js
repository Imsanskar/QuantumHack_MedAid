import React from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import BlockLink from '../CommonComponents/BlockLink'
import HappinessScale from '../SpecificComponents/HappinessScale'

const Mental = () => {
    return (
        <div>
            <Navigation />
            <Heading headingTitle="Mental" />

            <BlockLink name="suicide hotline" bgColor="#cc0000"
                urlExternal="https://www.imalive.org/">
                <strong>Online Suicide Prevention Hotline</strong>
            </BlockLink>

            <br />

            <HappinessScale />

            <br />

            <BlockLink name="meditate" bgColor="white"
                urlExternal="https://youtu.be/rkZl2gsLUp4">
                Feelng anxious ?<br />
                <strong>Check out this video on how to manage your mental health.</strong>
            </BlockLink>

            <BlockLink name="meditate-playlist" bgColor="white"
                urlExternal="https://www.youtube.com/watch?v=4EaMJOo1jks&list=PLDqTr678aIlc1i14hQKknyEko9LLbC0fb">
                Feelng restless ?<br />
                <strong>Check out this meditative playlist we have for times exactly like this.</strong>
            </BlockLink>

            <BlockLink name="meditate-playlist" bgColor="white"
                urlExternal="https://www.youtube.com/watch?v=4EaMJOo1jks&list=PLDqTr678aIlc1i14hQKknyEko9LLbC0fb">
                Feelng gloomy ?<br />
                <strong>Check out this 'funny cat videos' playlist that will surely put a smile on your face.</strong>
            </BlockLink>

        </div>
    )
}

export default Mental
