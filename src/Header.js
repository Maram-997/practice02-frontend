import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from "@auth0/auth0-react";
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
class Header extends React.Component {
  render() {
    const { user, isAuthenticated } = withAuth0();
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/favourites">Favourites</Link>

        { isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        
      </Navbar>
    );
  }
}

export default withAuth0(Header);
