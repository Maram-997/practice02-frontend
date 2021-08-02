import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './components/Profile';
import Favourite from './components/Favourite'
import Home from './components/Home';
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {

  render() {
    const { isAuthenticated , user}= this.props.auth0

    console.log('app', this.props);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated && <Home/>}
              </Route>
              <Route exact path="/profile">
                <Profile/>
              </Route>
              <Route exact path="/favourites">
                <Favourite/>
              </Route>
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
