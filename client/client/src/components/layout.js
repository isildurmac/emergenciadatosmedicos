import React from 'react';
import Navbar from './shared/navbar';
import Footer from './shared/footer';
import Home from './home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Profile from './profile';

class Layout extends React.Component {
    render() {
        return (
          <div>
            <Navbar />
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </div>
        );
    }
}

export default Layout;