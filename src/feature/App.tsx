import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Todo from './Todo';
import Activity from './Activity';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <Switch>
        <Route exact path='/'>
          <Todo />
        </Route>
        <Route exact path='/activity'>
          <Activity />
        </Route>
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
