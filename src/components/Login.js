import React, {useState, useEffect, useRef} from "react";
import { axiosWithAuth } from '../components/utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import { ButtonStyling } from './AddRecipeForm';
import { TweenMax } from 'gsap';
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  background-color: #3AAFA9;
`
const InputStyling = styled.input`
  width: 50%;
  height: 2rem;
  border-radius: 10px;
  font-size: 1.6rem;
  padding: 1.5%;
  border: 2px solid white;
  outline: none;
  margin-top: 3%;
  
  &:focus {
    outline: none;
  }
`
const RegisterLinkStyling = styled.div`
  font-size: 1.2rem;
  margin-bottom: 3%;
  outline: none;
`

function Login(props) {
  const [values, setValues] = useState({
      username: '',
      password: ''
  });
  const handleChange = ({target: {name, value}}) => setValues({...values, [name]: value});
  const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('/login', `grant_type=password&username=${values.username}&password=${values.password}`)
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.access_token);
          (props.history.push("/recipes"))
        })
        .catch(err => console.log(err.response))
  };

  let userBox = useRef(null);
  let passwordBox = useRef(null);
  let submitBox = useRef(null);
  let registerBox = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(userBox, 2, {
      opacity: 0,
      x: -130
    },{
      opacity: 1,
      x: 0
    })

    TweenMax.fromTo(passwordBox, 1.5, {
      opacity: 0,
      x: -130
    },{
      opacity: 1,
      x: 0
    })

    TweenMax.fromTo(submitBox, 1, {
      opacity: 0,
      x: -130
    },{
      opacity: 1,
      x: 0
    })

    TweenMax.fromTo(registerBox, .5, {
      opacity: 0,
      x: -130
    },{
      opacity: 1,
      x: 0
    })
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <InputStyling ref={e => (userBox = e)} name='username' value={values.username} placeholder='username' onChange={handleChange}/>
          <InputStyling ref={e => (passwordBox = e)} name='password' value={values.password} placeholder='password' onChange={handleChange}/>
          <ButtonStyling type='submit' ref={e => (submitBox = e)}>Submit</ButtonStyling>
          <RegisterLinkStyling ref={e => (registerBox = e)}>
            Not a member? <Link to='./register'>Register here!</Link>
          </RegisterLinkStyling>
        </InputContainer>
      </form>
    </div>
  )
}
export default Login;
     
  
//   export default Login;
  
// import React, { useState, useEffect } from 'react';
// import { withFormik, Form, Field } from 'formik';
// import { Link } from 'react-router-dom';
// import * as Yup from 'yup';
// import axios from 'axios';
// function Login({ values, errors, touched, status }) {
//     // const [login, setLogin] = useState([]);

//     // useEffect(() => {
//     //     status && setLogin(login => [...login, status])
//     // }, [status]);

//     return (
//         <div className='login-form'>
//             <Form>
//                 <Field type='text' name='username' placeholder='username' />
//                 {touched.username && errors.username && <p>{errors.username}</p>}
//                 <Field type='password' name='password' placeholder='Password' />
//                 {touched.password && errors.password && <p>{errors.password}</p>}
//                 <button type='submit'>Login</button>
//                 <div>
//                     Not a member? <Link to='./register'>Register here!</Link>
//                 </div>
//             </Form>
//         </div>
//     )
// }

// const FormikLogin = withFormik({
//     mapPropsToValues({ username, password }) {
//         return {
//             username: username || '',
//             password: password || ''
//         };
//     },

//     validationSchema: Yup.object().shape({
//         username: Yup.string()
//             .required('Your username is required to login.'),
//         password: Yup.string()
//             .min(6, 'Whoa buddy, that is not very secure. Make your password at least 6 characters long.')
//             .max(16, 'We understand you love security, but that password is way too long.')
//             .required('A password is required. Please refrain from using your birthday.')
//     }),

//     handleSubmit(values, { setStatus, resetForm }) {
//         axios
//             // .post('https://secretfamilyrecipescookbook.herokuapp.com/login', values)
//             .post('', values)
//             .then(response => {
//                 console.log(response);
//                 setStatus(response);
//                 resetForm();
//             })
//             .catch(error => {
//                 console.log('Ya done goofed, kiddo.', error);
//             })
//     }
// })(Login);

// export default FormikLogin;