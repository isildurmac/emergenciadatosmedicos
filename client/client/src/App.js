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
import Login from './components/autenticacion/login'
import Layout from './components/layout';

function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={Layout}>
        </Route>
        <Route exact path="/login" component={Login}>
        </Route>
      </Switch>
    </Router>
     
      </div>
  );
}

export default App;
