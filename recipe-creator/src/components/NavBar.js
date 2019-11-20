import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
  background-color: whitesmoke;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 2%;
  margin: 3%;
`

const NavBar = () => {
    return (
        <NavStyle>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            {/* <NavLink to='/recipes'>My Recipes</NavLink> */}
            <NavLink to='/login'>Login</NavLink>
            <NavLink to="/protected">Recipes</NavLink>
        </NavStyle>
    )
}

export default NavBar;