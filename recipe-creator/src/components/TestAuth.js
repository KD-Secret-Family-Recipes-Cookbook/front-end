import axios from 'axios';

export const axiosWithAuth = () => {
    const token = sessionStorage.getItem('token');
    return axios.create({
        baseURL: 'https://secretfamilyrecipescookbook.herokuapp.com',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `${token}`,
        },
    });
};