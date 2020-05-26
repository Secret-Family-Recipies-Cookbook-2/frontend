import React from 'react';
import './App.css';
import { Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'

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

          <Route path='/' component={Home}>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
