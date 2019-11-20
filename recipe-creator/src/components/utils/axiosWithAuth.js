import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    const clientId = 'lambda-client';
    const clientSecret = 'lambda-secret';
  
    return axios.create({
      baseURL: 'https://secretfamilyrecipescookbook.herokuapp.com',
      headers: {
        'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };