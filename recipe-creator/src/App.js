import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Registration from './components/Registration';
import RecipeCard from './components/RecipeCard';
import TestAxios from './components/TestAxios';
import AddRecipeForm from './components/AddRecipeForm';
import PrivateRoute from './components/PrivateRoute.js';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  const [recipe, setRecipe] = useState([
    {
      id: 1,
      name: 'Lasagna',
      category: 'pasta',
      source: 'Grandma',
      ingredients: 'tomato sauce, cheese, noodles',
      instructions: 'Lorem Ipsum',
    },
    
    {
      id: 2,
      name: 'Chicken Pot Pie',
      category: 'dinner',
      source: 'Mother',
      ingredients: 'chicken, vegetables, love',
      instructions: 'Lorem Ipsum',
    },

    {
      id: 3,
      name: 'Tacos',
      category: 'mexican',
      source: 'Brother',
      ingredients: 'tortilla shell, ground beef, cheddar cheese',
      instructions: 'Lorem Ipsum',
    }
  ]);

  const addNewRecipe = rec => {
    const newRecipe = {
      ...rec,
      id: Date.now()
    }
    setRecipe([...recipe, newRecipe])
  }

  return (
    <Router>
      <main>
        <NavBar />
        <Switch>
          <Route path='/login' component={Login} />
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/recipes" component={RecipeList} />
          <Route path='/register' component={Registration} />
          <Route path='/recipes' render={props => <AddRecipeForm {...props} addNewRecipe={addNewRecipe} /> } />
          <Route path="/recipes" component={RecipeList} />
          {/* <Route path='/recipes' render={props => <RecipeList {...props} recipe={recipe} addNewRecipe={addNewRecipe}/> } /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;