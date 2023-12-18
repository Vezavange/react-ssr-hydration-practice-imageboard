import React from 'react'

export default function NavBar({user}) {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ImageBoard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {user && 
    <>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="#">Add new Image</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">LogOut</a>
      </li>
    </ul>
    </>}
  {!user && 
    <>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="#">LogIn</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SignUp</a>
      </li>
    </ul>
    </>}
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
