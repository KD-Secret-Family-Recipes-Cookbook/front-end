import axios from 'axios';

export const axiosWithAuth = () => {
    const token = sessionStorage.getItem('token');
    return axios.create({
        baseURL: 'https://secretfamilyrecipescookbook.herokuapp.com',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer 5ec1d8a3-f5bf-46a6-a732-bcb47eeb833a`,
        },
    });
};