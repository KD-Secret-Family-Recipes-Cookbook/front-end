import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { InputContainer } from './Login';
import { ButtonStyling } from './Form';
import styled from 'styled-components';

const InputStyling = styled(Field)`
  width: 50%;
  height: 2rem;
  border-radius: 10px;
  font-size: 1.6rem;
  padding: 1.5%;
  border: 1px solid grey;
  outline: none;
  margin-top: 3%;
  
  &:focus {
    outline: none;
  }
`

function Registration({ values, errors, touched, status }) {
  return (
    <div className='registration-form'>
      <Form>
        <InputContainer>
          <InputStyling type='text' name='username' placeholder='username' autoComplete='off' />
          {touched.username && errors.username && <p>{errors.username}</p>}
          <InputStyling type='text' name='email' placeholder='Email' autoComplete='off' />
          {touched.email && errors.email && <p>{errors.email}</p>}
          <InputStyling type='password' name='password' placeholder='Password' autoComplete='off' />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <InputStyling type='checkbox' name='terms' checked={values.terms} autoComplete='off'/>Terms of Service
          {touched.terms && errors.terms && <p>{errors.terms}</p>}
          <ButtonStyling type='submit'>Register</ButtonStyling>
        </InputContainer>
      </Form>
    </div>
  )
}

const FormikRegistration = withFormik({
  mapPropsToValues({ username, email, password, terms }) {
    return {
      username: username || '',
      email: email || '',
      password: password || '',
      terms: terms || false
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required('Your username is required to login.'),
    email: Yup.string()
      .email('Not a valid email address. Check your spelling, poindexter.')
      .required('Your email address is required. Expect tons of spam.'),
    password: Yup.string()
      .min(6, 'Whoa buddy, that is not very secure. Make your password at least 6 characters long.')
      .max(16, 'We understand you love security, but that password is way too long.')
      .required('A password is required. Please refrain from using your birthday.'),
    terms: Yup.bool()
      .oneOf([true], 'Must Accept Terms of Service, even though you probably will not read it.')
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      // .post('https://secretfamilyrecipescookbook.herokuapp.com/register', values)
      .post('', values)
      .then(response => {
        console.log(response);
        setStatus(response);
        resetForm();
      })
      .catch(error => {
        console.log('Ya done goofed, kiddo.', error);
      })
  }
})(Registration);

export default FormikRegistration;