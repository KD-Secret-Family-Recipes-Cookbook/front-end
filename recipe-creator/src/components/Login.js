import React, {useState} from "react";
import { axiosWithAuth } from '../components/utils/axiosWithAuth';

function Login() {
  const [values, setValues] = useState({
      username: '',
      password: ''
  });
  const handleChange = ({target: {name, value}}) => setValues({...values, [name]: value});
  const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('/login', `grant_type=password&username=${values.username}&password=${values.password}`)
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
  };
  return (
      <>
          <form onSubmit={handleSubmit}>
              <label>Username: <input name='username' value={values.username} onChange={handleChange}/></label>
              <label>Password: <input name='password' value={values.password} onChange={handleChange}/></label>
              <button type='submit'>Submit</button>
          </form>
      </>
  )
}
export default Login;

// class Login extends React.Component {
//     state = {
//       credentials: {
//         username: '',
//         password: ''
//       }
//     };
  
//     handleChange = e => {
//       this.setState({
//         credentials: {
//           ...this.state.credentials,
//           [e.target.name]: e.target.value
//         }
//       });
//     };
  
//     login = e => {
//       e.preventDefault();
     
//       axios
//         .post('https://secretfamilyrecipescookbook.herokuapp.com/login', this.state.credentials)
//         .then(res => {
//           localStorage.setItem('token', res.data.payload);
          
//           this.props.history.push('/protected');
//         })
//         .catch(err => console.log(err));
//     };
  
//     componentDidMount() {
//       this.setState({ isLoading: false })
//     }
  
//     render() {
//       return (
//         <div>
//           <form onSubmit={this.login}>
//             <input
//               type="text"
//               name="username"
//               value={this.state.credentials.username}
//               onChange={this.handleChange}
//             />
//             <input
//               type="password"
//               name="password"
//               value={this.state.credentials.password}
//               onChange={this.handleChange}
//             />
//             <button>Log In</button>
//           </form>
//         </div>
//       );
//     }
//   }
  
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