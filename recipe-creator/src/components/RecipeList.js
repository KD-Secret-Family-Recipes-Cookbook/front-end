import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [input, setInput] = useState('');
  
    useEffect(() => {
      axios
        .get('https://secretfamilyrecipescookbook.herokuapp.com/recipes/recipes')
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

export default RecipeList;