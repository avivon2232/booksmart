import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import BuildDropdown from './BuildDropdown';
import QualityDropdown from './QualityDropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [builddropdown, setBuildDropdown] = useState(false);
  const [qualitydropdown, setQualityDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const openBuildDropDown = () => {
    if (window.innerWidth < 960) {
      setBuildDropdown(false);
    } else {
      setBuildDropdown(true);
    }
  };

  const openQualityDropDown = () => {
    if (window.innerWidth < 960) {
      setQualityDropdown(false);
    } else {
      setQualityDropdown(true);
    }
  };

  const closeBuildDropDown = () => {
    if (window.innerWidth < 960) {
      setBuildDropdown(false);
    } else {
      setBuildDropdown(false);
    }
  };

  const closeQualityDropDown = () => {
    if (window.innerWidth < 960) {
      setQualityDropdown(false);
    } else {
      setQualityDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          📖Booksmart
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={openBuildDropDown}
            onMouseLeave={closeBuildDropDown}
          >
            <Link
              to='/build'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Build <i className='fas fa-caret-down' />
            </Link>
            {builddropdown && <BuildDropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={openQualityDropDown}
            onMouseLeave={closeQualityDropDown}
          >
            <Link
              to='/quality'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Quality
            </Link>
            {qualitydropdown && <QualityDropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
