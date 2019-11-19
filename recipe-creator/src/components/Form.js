import React, { useState, useEffect } from 'react';

const Form = props => {
    const [recipe, setRecipe] = useState({ name: '', category: '', source: '', ingredients: '', instructions: '' })

    const handleChanges = event => {
        setRecipe({ ...recipe, [event.target.name]: event.target.value })
        // console.log(event.target.name);
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewRecipe(recipe);
        setRecipe({name:'', category:'', source:'', ingredients:'', instructions:''})
    }

    return (
        <div>
            <h1>Add Recipe</h1>
            <form onSubmit={submitForm}>
                <input
                    id='name'
                    type='text'
                    name='name'
                    placeholder='name'
                    value={recipe.name}
                    onChange={handleChanges}
                />
                <input
                    id='category'
                    type='text'
                    name='category'
                    placeholder='category'
                    value={recipe.category}
                    onChange={handleChanges}
                />
                <input
                    id='source'
                    type='text'
                    name='source'
                    placeholder='source'
                    value={recipe.source}
                    onChange={handleChanges}
                />
                <input
                    id='ingredients'
                    type='text'
                    name='ingredients'
                    placeholder='ingredients'
                    value={recipe.ingredients}
                    onChange={handleChanges}
                />
                <input
                    id='instructions'
                    type='text'
                    name='instructions'
                    placeholder='instructions'
                    value={recipe.instructions}
                    onChange={handleChanges}
                />
                <button type='submit'>Add Recipe</button>
            </form>
        </div>
    )
}

export default Form;