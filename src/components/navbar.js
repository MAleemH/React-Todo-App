/* eslint-disable import/no-extraneous-dependencies */
import { NavLink } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import useOnClickOutside from './useOnClickOutside';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, navbarOpen, () => setNavbarOpen(false));

  return (
    <nav ref={ref} className="navbar">
      <button
        type="button"
        className="toggle"
        onClick={() => setNavbarOpen((prev) => !prev)}
      >
        {navbarOpen ? (<MdClose />) : (<FiMenu />)}
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} onClick={() => setNavbarOpen(false)}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
