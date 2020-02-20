import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
}
from 'react-router-dom';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Login from './components/login';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Layout />
        </Route>
        <Redirect from="/**" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
