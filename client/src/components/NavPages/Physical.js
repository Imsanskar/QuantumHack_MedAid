import React,{ useState } from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import TodoWrapper from '../CommonComponents/TodoWrapper'
import ExercisePanel from '../SpecificComponents/ExercisePanel'
import BlockLink from '../CommonComponents/BlockLink'


const Physical = () => {
    const flag = 'exercise'
    const [totalWorkTime, updatetotalWorkTime] = useState(0);
    
    const recommended = 45;
    const personal = 60;

    const addMinutes = (time) => {
        if ((totalWorkTime * 100 / recommended) < 100) {
            updatetotalWorkTime(prevValue => prevValue + time);
        }
    }



    return (
        <div>
            <Navigation />
            <Heading headingTitle="Physical" />
            <ExercisePanel totalWorkTime={ Math.min(totalWorkTime,recommended) } _recommended = { recommended } _personal = { personal}/>
            <br />
            <BlockLink name="meditate-playlist" bgColor="#cc0000"
                urlExternal="https://www.youtube.com/watch?v=AoAm4om0wTs&list=PLChOO_ZAB22WuyDODJ3kjJiU0oQzWOTyb">
                Feeling lazy ?<br />
                <strong>Check out this 'EDM workout music' playlist that one of our creators at MEDAID absolutely loves!</strong>
            </BlockLink>
            <BlockLink name="rock-playlist" bgColor="#cc0000"
                urlExternal="https://www.youtube.com/watch?v=v2AC41dglnM&list=PLjwbNj9NASKPEh2jXIJdVSzWcOy_FRjbC">
                Too 'rock' for 'modern pop' ?<br />
                <strong>Rock from all the ages for those who love to listen to heavy music during their workout schedule.</strong>
            </BlockLink>
            <br />
            <TodoWrapper title='' headingTitle='Activity for today' flag={flag} addMinutes={ addMinutes }/>
        </div>
    )
}

export default Physical