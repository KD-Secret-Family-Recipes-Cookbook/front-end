import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from './TestAuth';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';
import AddRecipeForm from './AddRecipeForm';
import styled from 'styled-components';

const ListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: row;s
  background-color: darkseagreen;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 5%;
  margin: 3%;
`

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    axiosWithAuth().get('/recipes/recipes')
      .then(response => {
        console.log(response.data);
        // setRecipes(response.data);
        const searchRecipe = response.data.filter(rec =>
          rec.recipename.toLowerCase().includes(input.toLowerCase())
          )
          setRecipes(searchRecipe);
      })
      .catch(error => {
        console.log('Ya done goofed, kiddo', error);
      })
  }, [input]);

  const handleInputChange = event => {
    event.preventDefault();
    setInput(event.target.value);
  }

  return (
    <section className='recipe-list'>
      <SearchBar handleInputChange={handleInputChange} />
      <ListStyle>
        {recipes.map((rec, index) => {
          return (
            <RecipeCard
              key={index}
              name={rec.recipename}
              source={rec.source}
              category={rec.category}
              // ingredients={rec.ingredients}
              instructions={rec.instructions}
            />
          )
        })}
      </ListStyle>
      <AddRecipeForm />
    </section>
  )
}

export default RecipeList;