import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const link = {
    width:'100px',
    padding:'12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'white',
    background:"blue",
  }

  return (
    <div className='navbar'>
      <NavLink to="/" exact style={link} activeStyle={{background:'gray'}}>Home </NavLink>
      <NavLink to="/cars" exact style={link} activeStyle={{background:'gray'}}> Car List </NavLink>
      <NavLink to="/garage" exact style={link} activeStyle={{background:'gray'}}> My Garage  </NavLink>
    </div>
  );
};

export default NavBar;
