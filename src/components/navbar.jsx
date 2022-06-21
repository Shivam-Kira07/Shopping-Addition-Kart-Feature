import React from 'react';

const NavBar = ( {totalCounters}) => {
    return (
        <nav className="navbar bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href='localhost:3000'>Navbar
            <span className='badge badge-pill badge-secondary'>{totalCounters}</span>
            </a>
        </div>
        </nav>
    );
}

 
export default NavBar;