import React from 'react';
import Navbar from './shared/navbar';
import Footer from './shared/footer';
import Home from './home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Profile from './profile';
import Registry from './registry/registry';

class Layout extends React.Component {

  constructor(props){
    super(props);
  }

    render() {
        return (
          <div>
            <Navbar />
            <div>
              <Switch>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/registry">
                  <Registry />
                </Route>
                <Route path="/user-data">
                  <Registry />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        );
    }
}

export default Layout;