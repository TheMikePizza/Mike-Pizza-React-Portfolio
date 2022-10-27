import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink, Link } from "react-router-dom";

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} className="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handleSignout = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      });
  };
  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" className="nav-link-active">
            Home
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink className="nav-link-active" to="/about-me">
            About
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink className="nav-link-active" to="/contact">
            Contact
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink className="nav-link-active" to="/blog">
            Blog
          </NavLink>
        </div>
        {/* {true ? "do this" : " do something else"} */}
<div className="nav-link-wrapper-dynamic">
        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/portfolio-manager", "Portfolio Manager")
          : null}
          </div>
      </div>
      <div className="right-side">
        <h2>MIKE PIZZA</h2>
        {props.loggedInStatus === "LOGGED_IN" ? (
          <a onClick={handleSignout}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
