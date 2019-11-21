import React, { useEffect, useRef } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { InputContainer } from './Login';
import { ButtonStyling } from './AddRecipeForm';
// import { gsap } from 'gsap';
import styled from 'styled-components';

const InputStyling = styled(Field)`
  width: 50%;
  height: 2rem;
  border-radius: 10px;
  font-size: 1.6rem;
  font-family: 'Lucida Casual', 'Comic Sans MS';
  padding: 1.5%;
  border: 2px solid white;
  outline: none;
  margin-top: 3%;
  
  &:focus {
    outline: none;
  }
`
const TosStyling = styled.div`
  font-family: 'Lucida Casual', 'Comic Sans MS';
  text-align: center;
  color: #22283A;
`

function Registration({ values, errors, touched, status }) {
  // let userBox = useRef(null);
  // let emailBox = useRef(null);
  // let passwordBox = useRef(null);
  // let tosBox = useRef(null);
  // let submitBox = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(userBox, 2.5, {
  //     opacity: 0,
  //     x: -130
  //   }, {
  //     opacity: 1,
  //     x: 0
  //   })

  //   gsap.fromTo(emailBox, 2, {
  //     opacity: 0,
  //     x: -130
  //   }, {
  //     opacity: 1,
  //     x: 0
  //   })

  //   gsap.fromTo(passwordBox, 1.5, {
  //     opacity: 0,
  //     x: -130
  //   }, {
  //     opacity: 1,
  //     x: 0
  //   })

  //   gsap.fromTo(tosBox, 1, {
  //     opacity: 0,
  //     x: -130
  //   }, {
  //     opacity: 1,
  //     x: 0
  //   })

  //   gsap.fromTo(submitBox, .5, {
  //     opacity: 0,
  //     x: -130
  //   }, {
  //     opacity: 1,
  //     x: 0
  //   })
  // }, [])

  return (
    <div className='registration-form'>
      <Form>
        <InputContainer>
          <InputStyling type='text' name='username' placeholder='username' autoComplete='off' />
          {touched.username && errors.username && <p>{errors.username}</p>}
          <InputStyling type='text' name='email' placeholder='email' autoComplete='off' />
          {touched.email && errors.email && <p>{errors.email}</p>}
          <InputStyling type='password' name='password' placeholder='password' autoComplete='off' />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <TosStyling>
            <h2>Terms of Service</h2>
            <InputStyling type='checkbox' name='terms' checked={values.terms} autoComplete='off' />
          </TosStyling>
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