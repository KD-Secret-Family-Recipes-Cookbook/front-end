import React from 'react';
import styled from 'styled-components';

const SearchBarStyle = styled.input`
    border-radius: 10px;
    text-align: center;
    width: 40%
    height: 2rem;
    font-size: 1.6rem;
    margin: 0% 30%;
    border: 1px solid grey;
    outline: none;

    &:focus {
        outline: none;
    }
`

function SearchBar(props) {
    return (
        <section className='search-form'>
            <form>
            <SearchBarStyle
                type='text'
                name='name'
                placeholder='search by name'
                autoComplete='off'
                value={props.input}
                onChange={props.handleInputChange}
            />
            </form>
        </section>
    );
}

export default SearchBar;