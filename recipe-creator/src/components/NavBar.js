import React, { useRef } from "react";
import {NavLink} from "react-router-dom";
import { gsap, TweenMax, Linear } from 'gsap';
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
  let home = useRef(null);
  let about = useRef(null);
  let recipes = useRef(null);
  let login = useRef(null);
  
  function scaleUp() {
    TweenMax.to(home, 1, {
      scale: 1.2,
      ease: Linear.ease
    });
  }

  function scaleDown() {
    TweenMax.to(home, 1, {
      scale: 1.00
    });
  }

  function scaleUp2() {
    TweenMax.to(about, 1, {
      scale: 1.2,
      ease: Linear.ease
    });
  }

  function scaleDown2() {
    TweenMax.to(about, 1, {
      scale: 1.00
    });
  }

  function scaleUp3() {
    TweenMax.to(recipes, 1, {
      scale: 1.2,
      ease: Linear.ease
    });
  }

  function scaleDown3() {
    TweenMax.to(recipes, 1, {
      scale: 1.00
    });
  }

  function scaleUp4() {
    TweenMax.to(login, 1, {
      scale: 1.2,
      ease: Linear.ease
    });
  }

  function scaleDown4() {
    TweenMax.to(login, 1, {
      scale: 1.00
    });
  }

  return (
    <NavStyle>
      <NavLink to='/home' ref={e => (home = e)} onMouseEnter={scaleUp} onMouseLeave={scaleDown}>Home</NavLink>
        <NavLink to='/about' ref={e => (about = e)} onMouseEnter={scaleUp2} onMouseLeave={scaleDown2}>About</NavLink>
        <NavLink to='/protected' ref={e => (recipes = e)} onMouseEnter={scaleUp3} onMouseLeave={scaleDown3}>Recipes</NavLink>
        <NavLink to='/login' ref={e => (login = e)} onMouseEnter={scaleUp4} onMouseLeave={scaleDown4}>Login</NavLink>
    </NavStyle>
  )
}

export default NavBar;