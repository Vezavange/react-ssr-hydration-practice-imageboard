import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar({ user }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
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
                <a className="nav-link" href="#">Add new Image</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">LogOut</a>
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
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
