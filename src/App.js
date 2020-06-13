import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NewStoryPage from './Pages/NewStoryPage/NewStoryPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path='/newstory' component={NewStoryPage}/>
      </Switch>
    </div>
  );
}

export default App;
