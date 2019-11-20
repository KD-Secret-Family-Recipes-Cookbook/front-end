import React from 'react';
import styled from 'styled-components';

const SearchStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 2%;
`
const InputStyle = styled.input`
  border-radius: 5px;
  text-align: center;
  max-width: 400px;
`

function SearchBar(props) {
  return (
    <SearchStyle>
      <section className='search-form'>
        <form>
          <InputStyle
            type='text'
            name='name'
            placeholder='search by name'
            autoComplete='off'
            value={props.input}
            onChange={props.handleInputChange}
          />
        </form>
      </section>
    </SearchStyle>
  );
}

export default SearchBar;