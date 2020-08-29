import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const SignupForm = ({ errors, touched }) => {
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
        <div className="hrLine"></div>
        <div className="row form-group">
          <div className="col-sm" style={textStyle}>
            <label for="firstname">Firstname:</label>
            <Field class="form-control" type="text" name="firstname" id="firstname"
            />
            {touched.firstname && errors.firstname && <p className="w-100" style={errorStyle}>{errors.firstname}</p>}
          </div>
          <div className="col-sm" style={textStyle}>
            <label for="lastname">Lastname:</label>
            <Field class="form-control" type="text" name="lastname" id="lastname"
            />
            {touched.lastname && errors.lastname && <p className="w-100" style={errorStyle}>{errors.lastname}</p>}
          </div>
        </div>
        <div className="row form-group">
          <div className="col-sm" style={textStyle}>
            <label for="age">Age:</label>
            <Field class="form-control" type="text" min="1" name="age" id="age"
            />
            {touched.age && errors.age && <p className="w-100" style={errorStyle}>{errors.age}</p>}
          </div>
          <div className="col-sm" style={textStyle}>
            <label for="gender">Gender:</label>
            <Field component="select" class="form-control" name="gender" id="gender">
              <option value="Male" label="Male"></option>
              <option value="Female" label="Female"></option>
              <option value="Other" label="Other"></option>
            </Field>
          </div>
        </div>
        <div className="row form-group">
          <div className="col-sm" style={textStyle}>
            <label for="height">Height (in cms):</label>
            <Field class="form-control" type="text" name="height" id="height"
            />
            {touched.height && errors.height && <p className="w-100" style={errorStyle}>{errors.height}</p>}
          </div>
          <div className="col-sm" style={textStyle}>
            <label for="weight">Weight (in kgs):</label>
            <Field class="form-control" type="text" name="weight" id="weight"
            />
            {touched.weight && errors.weight && <p className="w-100" style={errorStyle}>{errors.weight}</p>}
          </div>
        </div>
        <div className="row">
          <button type="submit" class="btn text-white align-self-center" style={buttonStyle}>Sign Up</button>
        </div>
      </Form>
    </div>
  )
}


const FormikForm = withFormik({
  mapPropsToValues({ email, password, firstname, lastname, age, gender, height, weight }) {
    return {
      email: email || '',
      password: password || '',
      firstname: firstname || '',
      lastname: lastname || '',
      age: age || '',
      gender: gender || 'Male',
      height: height || '',
      weight: weight || '',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required('Email can not be empty').trim(),
    password: Yup.string().min(8, 'Password must be 8 charcters or longer').required('Password field can not be empty'),
    firstname: Yup.string().required('User first name can not be empty!').ensure().trim(),
    lastname: Yup.string().required('User last name can not be empty!').ensure().trim(),
    age: Yup.number().required('Age can not be empty!').positive('Age can not be negative!').integer('Please enter a valid integer age.').min(13).max(99),
    height: Yup.number().required('Height can not be empty!').positive('Height can not be negative'),
    weight: Yup.number().required('Weight can not be empty!').positive('Weight can not be negative').min(40),
  }),
  handleSubmit(values) {
    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(res => res.json()).then(( val ) => {
        alert('User Created!')
      })
      .catch(err => alert('Email in use! Try another'));
  }
})(SignupForm)

const formStyle = {
  backgroundColor: "#FFF4F4",
  color: "black",
  textAlign: "left",
  margin: "auto auto",
  paddingTop: "20px",
  paddingBottom: "20px",
}

const textStyle  = {
  fontFamily: 'Raleway-Medium',
  fontSize: '18px'
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

export default FormikForm
