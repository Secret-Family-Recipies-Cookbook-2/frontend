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
        {/* <Link to='/register'>Register</Link> */}
        {/* <Link to='/'>Home</Link> */}
        {/* <Link to='/login'>Login/Register</Link> */}
        <Login />
         
      </header>
      <div className='body-container'>
        <Switch>
          <Route path='/register' >
            <Register />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
        <Route path='/' >
            <Home />
        </Route>
      </div>
    </div>
  );
}

export default App;
