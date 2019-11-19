import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return (
        <nav>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/recipes'>My Recipes</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </nav>
    )
}

export default NavBar;