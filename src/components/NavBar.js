import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/" exact>Home </NavLink>
      <NavLink to="/cars" exact> Car List </NavLink>
      <NavLink to="/garage" exact> My Garage  </NavLink>
    </div>
  );
};

export default NavBar;
