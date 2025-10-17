import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { images } from '../../assets/assets';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <Link to='/'>
              <div className='image'>
                <img src={images.logo_m} alt='logo image' />
              </div>
              <div className='logo-text'>
                <h1>Mecapex Service </h1>
                <p>Limited</p>
              </div>
            </Link>
          </div>

          <ul className='list-menu'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
             
            >
              Home
            </NavLink>

            <NavLink
              to='/About-Us'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About us
            </NavLink>

            <NavLink
              to='/Our-Services'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Our Services
            </NavLink>

            <NavLink
              to='/Contact-Us'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              contact Us
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
