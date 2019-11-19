import React from "react";
import { axiosWithAuth } from '../components/utils/axiosWithAuth';
import { ButtonStyling } from './Form';
import styled from "styled-components";

// const LoginContainer = styled.div`
//     width: 60%;
//     margin: auto;
//     height: 8rem;
//     border: 2px solid grey;
//     border-radius: 10px;
//     background-color: indianred;
// `
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
    border: 2px solid grey;
    border-radius: 10px;
    background-color: indianred;
`
const InputStyling = styled.input`
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

class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
     
      axiosWithAuth()
        .post('https://secretfamilyrecipescookbook.herokuapp.com/login', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          // redirect to the apps main page?
          this.props.history.push('/protected');
        })
        .catch(err => console.log(err));
    };
  
    componentDidMount() {
      this.setState({ isLoading: false })
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.login}>
            <InputContainer>
              <InputStyling
                type="text"
                name="username"
                placeholder='username'
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              <InputStyling
                type="password"
                name="password"
                placeholder='password'
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <ButtonStyling>Log In</ButtonStyling>
            </InputContainer>
          </form>
        </div>
      );
    }
  }
  
  export default Login;
  
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