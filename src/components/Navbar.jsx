import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function NavBar({ user }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const logoutHandler = async () => {
    await axios('/auth/logout');
  };

  return (
    <div className='navbar-container'>
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">ImageBoard</NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleToggleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`}>
          {user ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/newpost">Add new</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={logoutHandler} href="/">LogOut</a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/login">LogIn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">SignUp</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
    </div>
  );
}
