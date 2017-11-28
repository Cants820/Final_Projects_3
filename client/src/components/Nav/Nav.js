import React from "react";
import "./Nav.css";

// Navigation bar

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>Home</a></li>
            <li role="presentation" class="active"><a href="#"><span class="glyphicon glyphicon-knight" aria-hidden="true"></span>Profile</a></li>
            <li role="presentation" class="active"><a href="#"><span class="glyphicon glyphicon-copy" aria-hidden="true"></span>Saved Article</a></li>
          </ul>
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
