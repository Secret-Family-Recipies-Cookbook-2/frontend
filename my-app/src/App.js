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
        {/* <Link to='/register'>Register</Link> */}
        {/* <Link to='/'>Home</Link> */}
        {/* <Link to='/login'>Login/Register</Link> */}
        {/* <Login /> */}
         
      </header>
      <div className='body-container'>
        <Switch>
          <Route path='/register' >
            <Register />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>

          <PrivateRoute path='/add-recipe/:user_id' component={AddRecipeForm} />

          <PrivateRoute path='/update-recipe/:id' component={UpdateRecipeForm} />

          {/* <PrivateRoute path='/my-recipes' component={RecipesList} /> */}

          <PrivateRoute path='/' component={RecipesList} />

        </Switch>
      </div>
    </div>
  );
}

export default App;
