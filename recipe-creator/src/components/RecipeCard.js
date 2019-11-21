import React, {useState} from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './utils/axiosWithAuth';

const CardStyle = styled.div`
    text-align: center;
    border: 2px solid grey;
    border-radius: 10px;
    background-color: whitesmoke;
`

const ImageStyle = styled.img`
  width: 100%;
`

// const editCard = document.querySelector('p');
// console.log(editCard);
// editCard.addEventListener('click', () => {
//     console.log('works!');
// })

// function handleEdit() {
//     console.log('working');
//     // document.body.style.backgroundColor='orange';
//     const p=document.querySelector('p');

//     p.textContent = <input type='text'></input>;
// }
const initialRecipe = {
    id: '',
    name: '',
    source: '',
    category: '',
    instructions: ''
}

const RecipeCard = props => {

    const [editing, setEditing] = useState(false);
    const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);

    const editRecipe = recipe => {
        setEditing(true);
        setRecipeToEdit(recipe);
    };

    const saveEdit = e => {
        axiosWithAuth()
            .put(`/recipes/recipe/${recipeToEdit.id}`, recipeToEdit)
            .then(res => {
                console.log(res.data);
                props.recipes.map(i => {
                    if (i.id === recipeToEdit.id) {
                        setRecipeToEdit({
                            [e.target.name]: e.target.value
                        })
                    }
                })
            })
            .catch(err => console.log(err))
    };

    const deleteRecipe = recipe => {
        axiosWithAuth()
            .delete(`/recipes/recipe/${recipe.id}`)
            .then(res => {
                console.log(res);
                const deletedRecipe = props.recipes.filter(recipe => recipe.id !== recipe.id)
                props.setRecipes(deletedRecipe)
            })
            .catch(err => {
                console.log(err)
            })
    };


    return (

        <CardStyle key={props.id} onClick={() => editRecipe(props.recipe)}>
            <div className='recipe-image'>
                {/* <ImageStyle src={props.imageurl} alt='yummy foodz' /> */}
                <ImageStyle src={'https://picsum.photos/200'} alt='yummy foodz' />
            </div>

            <h2>{`${props.source}'s ${props.name}`}</h2>
            <p>{props.category}</p>
            {/* <p>{props.ingredients}</p> */}
            <p>{props.instructions}</p>
            <span>
                <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteRecipe(props.recipe)
                    }   
                    }>
                    X
                </span>{""}
                {props.id}
            </span>
            {/* <button type='edit' onClick={handleEdit}>Edit</button> */}
            <div className="buttons">
                <button onClick = {() => props.deleteRecipe(props.recipe.id)}> Delete Recipe</button>
                <button onClick={()=>props.selectRecipe(props.recipe)}>Update Recipe</button>
            </div>
            
        </CardStyle>
            // {/* <Form addNewRecipe={props.addNewRecipe} /> */}
    )
}

export default RecipeCard;