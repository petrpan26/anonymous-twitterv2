import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NewStoryPage from './Pages/NewStoryPage/NewStoryPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={HomePage}/>
        <Route path='/newstory' component={NewStoryPage}/>
        <Route path='/'>
          <Redirect to='/home'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
