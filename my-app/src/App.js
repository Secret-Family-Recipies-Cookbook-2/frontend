import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className='body-container'>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
