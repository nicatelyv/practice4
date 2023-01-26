import React from 'react'
import './style.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Add() {
    return (
        <section className='addpage'>
            <Formik
                initialValues={{ imgUrl: '', title: '', name: '', price: '' }}
                validationSchema={Yup.object({
                    imgUrl: Yup.string().required('*'),
                    title: Yup.string().required('*'),
                    name: Yup.string().required('*'),
                    price: Yup.number().required('*'),
                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:5555/api",values)
                }}
            >
                <Form>
                    <div className='addMain'>
                        <label htmlFor="imgUrl">Image Url : <Field name="imgUrl" type="text" /><ErrorMessage name="imgUrl" /></label>

                        <label htmlFor="title">Categories ? <Field name="title" type="text" /><ErrorMessage name="title" /></label>

                        <label htmlFor="name">Name ? <Field name="name" type="text" /><ErrorMessage name="name" /></label>

                        <label htmlFor="price">Price ? <Field name="price" type="number" /><ErrorMessage name="price" /></label>

                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </section>
    )
}

export default Add