import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from './TestAuth';


function TestAxios() {
    const [recipes, setRecipes] = useState([]);
    const [input, setInput] = useState('');
  
    useEffect(() => {
        axiosWithAuth().get('/recipes/recipes')
        .then(response => {
          console.log(response);
          setRecipes(response);
        })
        .catch(error => {
          console.log('Ya done goofed, kiddo', error);
        })
    }, []);

    return (
        <h1>My Recipes</h1>
    )
}

export default TestAxios;