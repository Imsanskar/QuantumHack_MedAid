import React from 'react'
import LoginNav from '../SpecificComponents/LoginNav'
import SignupForm from '../SpecificComponents/SignupForm'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>  
            <LoginNav />
            <br/>
            <SignupForm />
            <br/>
            <span style={textStyle}>Already have an account?<br/>
                <Link to="/login">Log In</Link>
            </span>
        </>
    )
}

const textStyle = {
    fontSize: "18px",
    fontFamily: "Raleway-Medium",
}

export default Signup
