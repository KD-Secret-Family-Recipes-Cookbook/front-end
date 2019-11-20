import React from 'react';
import Form from './Form.js';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const ListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 20px;
    grid-auto-flow: row;
    background-color: darkseagreen;
    border: 2px solid grey;
    border-radius: 10px;
    padding: 5%;
    margin: 3%;
`
const CardStyle = styled.div`
    text-align: center;
    border: 2px solid grey;
    border-radius: 10px;
    background-color: whitesmoke;
`

// const editCard = document.querySelector('p');
// console.log(editCard);
// editCard.addEventListener('click', () => {
//     console.log('works!');
// })


function handleEdit() {
    console.log('working');
    // document.body.style.backgroundColor='orange';
    const p=document.querySelector('p');

    p.textContent = <input type='text'></input>;
}


const Recipes = props => {
    return (
        <div className='recipe-list'>
            <SearchBar />
            <ListStyle>
                {props.recipe.map(recItem => (
                    <CardStyle key={recItem.id}>
                        <h2>{`${recItem.source}'s ${recItem.name}`}</h2>
                        <p>{recItem.category}</p>
                        <p>{recItem.ingredients}</p>
                        <p>{recItem.instructions}</p>
                        <button type='edit' onClick={handleEdit}>Edit</button>
                    </CardStyle>
                ))}
            </ListStyle>
            <Form addNewRecipe={props.addNewRecipe} />
        </div>
    )
}

export default Recipes;