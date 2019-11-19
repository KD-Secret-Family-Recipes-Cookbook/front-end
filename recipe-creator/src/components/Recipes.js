import React from 'react';
import Form from './Form.js';
import styled from "styled-components";

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

const Recipes = props => {
    return (
        <div className='recipe-list'>
            <ListStyle>
                {props.recipe.map(recItem => (
                    <CardStyle key={recItem.id}>
                        <h2>{recItem.name}</h2>
                        <h3>{recItem.category}</h3>
                        <h4>{recItem.source}</h4>
                        <h4>{recItem.ingredients}</h4>
                        <p>{recItem.instructions}</p>
                    </CardStyle>
                ))}
            </ListStyle>
            <Form addNewRecipe={props.addNewRecipe} />
        </div>
    )
}

export default Recipes;