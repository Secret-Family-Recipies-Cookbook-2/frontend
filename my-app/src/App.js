import React from 'react';
import './App.css';
import { Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'
import PrivateRoute from './utils/PrivateRoute.js'
import AddRecipeForm from './components/AddRecipeForm.js';
import UpdateRecipeForm from './components/UpdateRecipeForm.js'
import RecipesList from './components/RecipesList';

function App() {
  return (
    <div className="App">
      <header>
      
        <NavBar />
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
         
      </header>
      <div className='body-container'>
        <Switch>
          <Route path='/register' component={Register}>
            <Register />
          </Route>

          <Route path='/login'component={Login}>
            <Login />
          </Route>

          <PrivateRoute path='/add-recipe/:user_id' component={AddRecipeForm} />

          <PrivateRoute path='/update-recipe' component={UpdateRecipeForm} />

          <PrivateRoute path='/my-recipes' component={RecipesList} />

          <PrivateRoute path='/' component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
