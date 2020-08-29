import React,{ useState } from 'react'
import Navigation from '../CommonComponents/Navigation'
import Heading from '../CommonComponents/Heading'
import TodoWrapper from '../CommonComponents/TodoWrapper'
import ExercisePanel from '../SpecificComponents/ExercisePanel'


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
            <TodoWrapper title='' headingTitle='Activity for today' flag={flag} addMinutes={ addMinutes }/>
        </div>
    )
}

export default Physical