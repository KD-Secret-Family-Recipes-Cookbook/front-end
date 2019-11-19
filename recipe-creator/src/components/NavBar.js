import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 2%;
  margin: 3%;

//   &:hover {
//       background-color: black;
//   }
`
const AStyle = styled.a`
  text-decoration: none;
`

const NavBar = () => {
    return (
        <NavStyle>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/recipes'>My Recipes</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </NavStyle>
    )
}

export default NavBar;