import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const SettingsForm = ({ values, errors, touched }) => {
    return (
        <div className="container">
            <Form className="col-10 col-sm-12 col-md-10 col-lg-8" style={formStyle} action="" method="">
                <div className="row form-group">
                    <div className="col">
                        <label for="username">Username:</label>
                        <Field class="form-control" type="text" name="username" id="username"
                        />
                        {touched.username && errors.username && <p className="w-100" style={errorStyle}>{errors.username}</p>}
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-sm">
                        <label for="age">Age:</label>
                        <Field class="form-control" type="text" min="1" name="age" id="age"
                        />
                        {touched.age && errors.age && <p className="w-100" style={errorStyle}>{errors.age}</p>}
                    </div>
                    <div className="col-sm">
                        <label for="gender">Gender:</label>
                        <Field component="select" class="form-control" name="gender" id="gender">
                            <option value="male" label="male"></option>
                            <option value="female" label="female"></option>
                        </Field>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-sm">
                        <label for="height">Height (in cms):</label>
                        <Field class="form-control" type="text" name="height" id="height"
                        />
                        {touched.height && errors.height && <p className="w-100" style={errorStyle}>{errors.height}</p>}
                    </div>
                    <div className="col-sm">
                        <label for="weight">Weight (in kgs):</label>
                        <Field class="form-control" type="text" name="weight" id="weight"
                        />
                        {touched.weight && errors.weight && <p className="w-100" style={errorStyle}>{errors.weight}</p>}
                    </div>
                </div>
                <div className="row">
                    <button class="btn text-white align-self-center" style={buttonStyle}>Save</button>
                </div>
            </Form>
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ username, age, gender, height, weight }) {
        return {
            username: username || '',
            age: age || '',
            gender: gender || 'male',
            height: height || '',
            weight: weight || '',
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('User name can not be empty!').ensure().trim(),
        age: Yup.number().required('Age can not be empty!').positive('Age can not be negative!').integer('Please enter a valid integer age.').min(13).max(99),
        height: Yup.number().required('Height can not be empty!').positive('Height can not be negative'),
        weight: Yup.number().required('Weight can not be empty!').positive('Weight can not be negative').min(40),
    }),
    handleSubmit(values) {
        console.log(values);
    }
})(SettingsForm)

const formStyle = {
    backgroundColor: "#FFF4F4",
    color: "black",
    textAlign: "left",
    margin: "auto auto",
    paddingTop: "20px",
    paddingBottom: "20px",
    fontFamily: "Raleway-Medium"
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