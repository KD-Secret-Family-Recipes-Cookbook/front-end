import React, { useState } from 'react';
import { Collapse, Card, CardBody } from 'reactstrap';
import styled from 'styled-components';

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

// function handleEdit() {
//     console.log('working');
//     // document.body.style.backgroundColor='orange';
//     const p=document.querySelector('p');

//     p.textContent = <input type='text'></input>;
// }

const RecipeCard = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <CardStyle key={props.id} onClick={toggle}>
            <h2>{`${props.source}'s ${props.name}`}</h2>
            <p>{props.category}</p>
            {/* <p>{props.ingredients}</p> */}
            <Collapse isOpen={isOpen}>
                <p>{props.instructions}</p>
            </Collapse>
            {/* <button type='edit' onClick={handleEdit}>Edit</button> */}
        </CardStyle>
            // {/* <Form addNewRecipe={props.addNewRecipe} /> */}
    )
}

export default RecipeCard;