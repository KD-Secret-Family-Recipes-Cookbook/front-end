import React, { useState } from 'react';
import styled from "styled-components";

const AddRecipeContainer = styled.div`
    border: 2px solid grey;
    border-radius: 10px;
    margin: 3%;
    background-color: indianred;
`
const HeaderStyling = styled.h1`
    text-align: center;
`
const InputContainer = styled.div`
    // border: 2px solid grey;
`
const RecipeStyling = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 3%;
`
const RowOneStyling = styled.input`
    width: 28%;
    height: 2rem;
    border-radius: 10px;
    font-size: 1.6rem;
    padding: 1.5%;
    border: 1px solid grey;
    outline: none;
  
    &:focus {
        outline: none;
    }
`
const RowTwoStyling = styled.textarea`
    height: 5rem;
    border-radius: 10px;
    font-size: 1.6rem;
    padding: 1.5%;
    margin: 0% 1.5%;
    border: 1px solid grey;
    outline: none;
  
    &:focus {
        outline: none;
    }
`
const RowThreeStyling = styled.textarea`
    height: 12rem;
    border-radius: 10px;
    font-size: 1.6rem;
    padding: 1.5%;
    margin: 3% 1.5% 0% 1.5%;
    border: 1px solid grey;
    outline: none;
  
    &:focus {
        outline: none;
    }
`
const InstructionStyling = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ButtonContainer = styled.div`
    text-align: center;
`
export const ButtonStyling = styled.button`
    text-align: center;
    background-color: #22283A;
    color: white;
    padding: 8px 0px;
    margin: 3%;
    border-radius: 5px;
    font-size: 1.9rem;
    width: 200px;
    border: 2px solid #22283A;
    outline: none;

    &:hover {
        background-color: white;
        color: #22283A;
        animation: shadow-pulse 1s infinite;
       
        @keyframes shadow-pulse {
            0% {
              box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
            }
            100% {
              box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
            }
        }
    }
`

const AddRecipeForm = props => {
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
        <AddRecipeContainer>
            <HeaderStyling>Add Recipe</HeaderStyling>
            <InputContainer>
                <form onSubmit={submitForm}>
                    <RecipeStyling>
                        <RowOneStyling
                            id='name'
                            type='text'
                            name='name'
                            placeholder='name'
                            value={recipe.recipename}
                            onChange={handleChanges}
                            autoComplete='off'
                            border='none'
                        />
                        <RowOneStyling
                            id='name'
                            type='text'
                            name='category'
                            placeholder='category'
                            value={recipe.category}
                            onChange={handleChanges}
                            autoComplete='off'
                        />
                        <RowOneStyling
                            id='name'
                            type='text'
                            name='source'
                            placeholder='source'
                            value={recipe.source}
                            onChange={handleChanges}
                            autoComplete='off'
                        />
                    </RecipeStyling>
                    <InstructionStyling>
                        <RowTwoStyling
                            id='ingredients'
                            type='text'
                            name='ingredients'
                            placeholder='ingredients'
                            value={recipe.ingredients}
                            onChange={handleChanges}
                            autoComplete='off'
                        />
                        <RowThreeStyling
                            id='instructions'
                            type='text'
                            name='instructions'
                            placeholder='instructions'
                            value={recipe.instructions}
                            onChange={handleChanges}
                            autoComplete='off'
                        />
                    </InstructionStyling>
                    <ButtonContainer>
                        <ButtonStyling type='submit'>Add Recipe</ButtonStyling>
                    </ButtonContainer>
                </form>
            </InputContainer>
        </AddRecipeContainer>
    )
}

export default AddRecipeForm;