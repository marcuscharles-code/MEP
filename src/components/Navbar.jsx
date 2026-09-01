// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="logo">
                    <a className='hero-logo'>
                        <span>MEP</span>
                    </a>
                </div>
                <div>
                    <div className={`hero-list ${isOpen ? 'open' : ''}`}>
                        <NavLink to="/" onClick={toggleNavbar} activeClassName="active">Home</NavLink>
                        <NavLink to="/about" onClick={toggleNavbar} activeClassName="active">About</NavLink>
                        <NavLink to="/services" onClick={toggleNavbar} activeClassName="active">Services</NavLink>
                        <NavLink to="/contact" onClick={toggleNavbar} activeClassName="active">Contact</NavLink>
                    </div>
                    <label className="hamburger" onClick={toggleNavbar}>
                        <input type="checkbox" checked={isOpen} onChange={toggleNavbar} />
                        <svg viewBox="0 0 32 32">
                            <path d="M27 10L13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                            <path d="M7 16L27 16" />
                        </svg>
                    </label>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
