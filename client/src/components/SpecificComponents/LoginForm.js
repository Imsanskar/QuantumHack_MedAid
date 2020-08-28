import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const LoginForm = ({ errors, touched }) => {
    return (
        <div className="container">
            <Form className="col-10 col-sm-12 col-md-10 col-lg-8" style={formStyle} action="" method="">
                <div className="row form-group">
                    <div className="col" style={textStyle}>
                        <label for="email">Email:</label>
                        <Field class="form-control" type="email" name="email" id="email"
                        />
                        {touched.email && errors.email && <p className="w-100" style={errorStyle}>{errors.email}</p>}
                    </div>
                </div>
                <div className="row form-group" style={textStyle}>
                    <div className="col">
                        <label for="password">Password:</label>
                        <Field class="form-control" type="password" name="password" id="password"
                        />
                        {touched.password && errors.password && <p className="w-100" style={errorStyle}>{errors.password}</p>}
                    </div>
                </div>
                <div className="row">
                    <button class="btn text-white align-self-center" style={buttonStyle}>Log In</button>
                </div>
            </Form>
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || '',
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required('Email can not be empty').trim(),
        password: Yup.string().min(4, 'Password must be 4 charcters or longer').required('Password field can not be empty')
    }),
    handleSubmit(values) {
        console.log(values);
    }
})(LoginForm)

const formStyle = {
    backgroundColor: "#FFF4F4",
    color: "black",
    textAlign: "left",
    margin: "auto auto",
    paddingTop: "20px",
    paddingBottom: "20px",
}

const buttonStyle = {
    backgroundColor: "#cc0000",
    margin: "25px auto",
    width: "100px",
}

const errorStyle = {
    fontSize: "12px",
    color: "#cc0000",
}

const textStyle  = {
    fontFamily: 'Raleway-Medium',
    fontSize: '18px'
}

export default FormikForm
