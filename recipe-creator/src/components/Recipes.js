import React from 'react';
import Form from './Form.js';

const Recipes = props => {
    return (
        <div className='recipe-list'>
            <Form addNewRecipe={props.addNewRecipe} />
            {props.recipe.map(recItem => (
                <div className='recipe-item' key={recItem.id}>
                    <h2>{recItem.name}</h2>
                    <h3>{recItem.category}</h3>
                    <h4>{recItem.source}</h4>
                    <h4>{recItem.ingredients}</h4>
                    <h4>{recItem.instructions}</h4>
                </div>
            ))}
        </div>
    )
}

export default Recipes;