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
import UserData from './user-data';
import Contact from './contact/contact';
import Search from './search/search';

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
                  <UserData />
                </Route>
                <Route path="/search">
                  <Search />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        );
    }
}

export default Layout;