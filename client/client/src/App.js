
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// React
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utiles
import jwt_decode from "jwt-decode";
import setAuthToken from "./components/autenticacion/setAuthentication";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { cambiarUsuarioActual, cerrarSesionUsuario } from "./acciones/accionesAutenticacion";

// Components
// import Register from "./components/autenticacion/Register";
import Login from "./components/login";
import Profile from "./components/profile";
// import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/layout";
import NotFound from "./components/404/404";

// Check for token to keep user logged in
if (localStorage.jwtTokenTeams) {
  // Set auth token header auth
  const token = JSON.parse(localStorage.jwtTokenTeams);
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(cambiarUsuarioActual(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(cerrarSesionUsuario());

    // Redirect to login
    window.location.href = "./";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Layout} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route exact path="/register" component={Register} /> */}
              {/* <PrivateRoute exact path="/dashboard" component={Layout} /> */}
              <Route
                component={localStorage.jwtTokenTeams ? Layout : NotFound}
              /> 
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
