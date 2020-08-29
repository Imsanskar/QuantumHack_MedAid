import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const UtilityForm = ({ errors, touched }) => {
    return (
        <div className="container">
            <Form className="col-10 col-sm-12 col-md-10 col-lg-8" style={formStyle} action="" method="">
                <div className="row form-group">
                    <div className="col" style={textStyle}>
                        <label for="bpSYS">Blood Pressure (Systolic):</label>
                        <Field class="form-control" type="text" name="bpSYS" id="bpSYS"
                        />
                        {touched.bpSYS && errors.bpSYS && <p className="w-100" style={errorStyle}>{errors.bpSYS}</p>}
                        <label for="bpDIA">Blood Pressure (Diasystolic):</label>
                        <Field class="form-control" type="text" name="bpDIA" id="bpDIA"
                        />
                        {touched.bpDIA && errors.bpDIA && <p className="w-100" style={errorStyle}>{errors.bpDIA}</p>}
                    </div>
                </div>
                <div className="row form-group" style={textStyle}>
                    <div className="col">
                        <label for="bslBM">Blood Sugar Level (before meal - mg/dL):</label>
                        <Field class="form-control" type="text" name="bslBM" id="bslBM"
                        />
                    </div>
                    {touched.bslBM && errors.bslBM && <p className="w-100" style={errorStyle}>{errors.bslBM}</p>}
                </div>
                <div className="row form-group" style={textStyle}>
                    <div className="col">
                        <label for="bslAM">Blood Sugar Level (after meal - mg/dL):</label>
                        <Field class="form-control" type="text" name="bslAM" id="bslAM"
                        />
                    </div>
                    {touched.bslAM && errors.bslAM && <p className="w-100" style={errorStyle}>{errors.bslAM}</p>}
                </div>
                <div className="row">
                    <button type="submit" class="btn text-white align-self-center" style={buttonStyle}>Submit</button>
                </div>
            </Form>
        </div>
    )
}

// bslAM = bloodSugarLevelAfterMeal, BM = Before Meal
const FormikForm = withFormik({
    mapPropsToValues({ bpSYS, bpDIA, bslAM, bslBM }) {
        return {
            bpSYS: bpSYS || '',
            bpDIA: bpDIA || '',
            bslAM: bslAM || '',
            bslBM: bslBM || '',
        }
    },
    validationSchema: Yup.object().shape({
        bpSYS: Yup.number().positive("Enter a positive value"),
        bpDIA: Yup.number().positive("Enter a positive value"),
        bslAM: Yup.number().positive("Enter a positive value!"),
        bslBM: Yup.number().positive("Enter a positive value!"),
    }),
    handleSubmit(values) {
        console.log(values);
    }
})(UtilityForm)

const formStyle = {
    backgroundColor: "#FFF4F4",
    color: "black",
    textAlign: "left",
    margin: "auto auto",
    paddingTop: "20px",
    paddingBottom: "20px",
}

const errorStyle = {
    fontSize: "12px",
    color: "#cc0000",
}

const buttonStyle = {
    backgroundColor: "#cc0000",
    margin: "25px auto",
    width: "100px",
}

const textStyle = {
    fontFamily: 'Raleway-Medium',
    fontSize: '18px'
}

export default FormikForm 
