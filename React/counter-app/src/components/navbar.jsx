import React, { Component } from 'react';

//Stateless Functional Component
// props should be sent as an arugument to the function

// object Destructuring
const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar  
      <span className="badge rounded-pill bg-secondary">
        {totalCounters}</span></a>
    </div>
  </nav>
   );
}
 
export default NavBar;
