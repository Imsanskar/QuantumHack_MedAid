import React from 'react'
import LoginForm from '../SpecificComponents/Forms/LoginForm'
import LoginNav from '../SpecificComponents/LoginNav'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <LoginNav />
            <br/>
            <LoginForm />
            <br/>
            <span style={textStyle}>New to the app?<br/>
                <Link to="/signup">Sign Up</Link>
            </span>
        </>
    )
}

const textStyle = {
    fontSize: "18px",
    fontFamily: "Raleway-Medium",
}

export default Login
