import React, { Component } from 'react';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">Counter 
    <span className="badge badge-pill badge-secondar">{props.totalCounters}</span></a>
    
  </nav>
  );
}
 
 
export default NavBar;