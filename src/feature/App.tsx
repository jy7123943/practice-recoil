import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Todo from './Todo';
import Activity from './Activity';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Todo />
      </Route>
      <Route exact path='/activity'>
        <Activity />
      </Route>
    </Switch>
  );
}

export default App;
