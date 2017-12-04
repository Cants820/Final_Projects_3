import React from "react";
import {Link} from 'react-router-dom';

const Header = () => 
<div className="container">
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
        <Link className="navbar-brand" to='#'>eYellow</Link>
        <ul className="nav navbar-nav navbar-right">
          <li className={window.location.pathname=== '/search' ? 'active' : ''}>
            <Link to='/search'>Search</Link>
          </li>
          <li className={window.location.pathname === '/saved' ? 'active' : ''}>
            <Link to='/saved'>Saved Venues</Link>
          </li>
          <li className={window.location.pathname === '/suggestions' ? 'active' : ''}>
            <Link to='/suggestions'>Recommended Venues</Link>
          </li>
        </ul>
    </div>
  </nav>

  <div>
    <div className="jumbotron">
    <h1>eYellow</h1> 
    <p>Search for any thing you want</p> 
    </div>
  </div>

</div>;

export default Header;