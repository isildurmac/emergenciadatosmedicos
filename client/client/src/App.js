import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}
from 'react-router-dom';
import logo from './logo.svg';
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
        <Route exact path="/">
          <Layout />
        </Route>
        <Route replace={true} strict={true} path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
