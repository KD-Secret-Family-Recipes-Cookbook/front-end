import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';

function Data() {
    const [recipe, setRecipe] = useState([
        {
          id: 1,
          name: 'Matthew',
          email: 'matthew@gmail.com',
          role: 'Lover of Doggos'
        },
        
        {
          id: 2,
          name: 'Spencer',
          email: 'spencer@gmail.com',
          role: 'Rider of Motorcycles'
        },
    
        {
          id: 3,
          name: 'William',
          email: 'william@gmail.com',
          role: 'Savant of Startups'
        },
    
        {
          id: 4,
          name: 'Aaron',
          email: 'aaron@gmail.com',
          role: 'Brewer of Coffee'
        }
    ]);
    
    const addNewRecipe = recipe => {
        const newRecipe = {
          ...recipe,
          id: Date.now()
          // name: member.name,
          // email: member.email,
          // role: member.role
        }
        setRecipe([...recipe, newRecipe])
    }
}

return (
    <RecipeForm addNewRecipe={addNewRecipe} />
)

export default Data;