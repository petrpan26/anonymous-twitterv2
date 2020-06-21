import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NewStoryPage from './Pages/NewStoryPage/NewStoryPage';
import StoriesPage from './Pages/StoriesPage/StoriesPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path='/stories' render={
          (props) => (<StoriesPage key={props.location.search} {...props}></StoriesPage>)
        }/>
        <Route path='/'>
          <Redirect to='/home'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
