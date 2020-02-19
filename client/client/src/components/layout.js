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
import Registry from './registry/registry';

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
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/registry">
                  <Registry />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </div>
        );
    }
}

export default Layout;