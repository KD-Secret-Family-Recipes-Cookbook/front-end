import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    // console.log(userToken);
    return axios.create({
        baseURL: 'https://secretfamilyrecipescookbook.herokuapp.com',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`,
        },
    });
};