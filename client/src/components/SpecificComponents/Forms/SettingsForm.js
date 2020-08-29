import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const SettingsForm = ({ errors, touched }) => {
    return (
        <div className="container">
            <Form className="col-10 col-sm-12 col-md-10 col-lg-8" style={formStyle} action="" method="">
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
                            <option value="male" label="male"></option>
                            <option value="female" label="female"></option>
                            <option value="other" label="other"></option>
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
                    <button type="submit" class="btn text-white align-self-center" style={buttonStyle}>Save</button>
                </div>
            </Form>
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ firstname, lastname, age, gender, height, weight }) {
        return {
            firstname: firstname || '',
            lastname: lastname || '',
            age: age || '',
            gender: gender || 'male',
            height: height || '',
            weight: weight || '',
        }
    },
    validationSchema: Yup.object().shape({
        firstname: Yup.string().required('User name can not be empty!').ensure().trim(),
        lastname: Yup.string().required('User name can not be empty!').ensure().trim(),
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