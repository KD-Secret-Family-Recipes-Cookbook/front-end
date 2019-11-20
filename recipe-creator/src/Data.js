import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';

function Data() {
  const [recipe, setRecipe] = useState([
    {
      id: 1,
      name: 'Lasagna',
      category: 'pasta',
      source: 'Grandma',
      ingredients: 'tomato sauce, cheese, noodles',
      instructions: 'Lorem Ipsum',
    },
    
    {
      id: 2,
      name: 'Chicken Pot Pie',
      category: 'dinner',
      source: 'Mother',
      ingredients: 'chicken, vegetables, love',
      instructions: 'Lorem Ipsum',
    },

    {
      id: 3,
      name: 'Tacos',
      category: 'mexican',
      source: 'Brother',
      ingredients: 'tortilla shell, ground beef, cheddar cheese',
      instructions: 'Lorem Ipsum',
    }
  ]);

  const addNewRecipe = rec => {
    const newRecipe = {
      ...rec,
      id: Date.now()
    }
    setRecipe([...recipe, newRecipe])
  }

  return (
    <RecipeForm addNewRecipe={addNewRecipe} />
  )
}

export default Data;