import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import { useAuth0 } from "./react-auth0-spa";
export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          )}
          <li>
            {!isAuthenticated && (
              <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}
            {isAuthenticated && (
              <button onClick={() => logout()}>Log out</button>
            )}
          </li>
        </ul>
      </nav>
      <div>
        <Route path="/" exact render={props => <Home />} />
        <Route path="/Profile" exact render={props => <Profile />} />
      </div>
    </div>
  );
}
