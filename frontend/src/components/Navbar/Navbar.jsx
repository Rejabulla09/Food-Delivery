import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMobileAlt, faEnvelope, faUtensils } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menu, setMenu] = useState('menu');

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='logo' className='logo' />
      <ul className='navbar-menu'>
        <li onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>
          <FontAwesomeIcon icon={faHome} className='menu-icon' /> Home
        </li>
        <li onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>
        <FontAwesomeIcon icon={faUtensils} className='menu-icon' />  Menu
        </li>
        <li onClick={() => setMenu('Mobile-app')} className={menu === 'Mobile-app' ? 'active' : ''}>
          <FontAwesomeIcon icon={faMobileAlt} className='menu-icon' /> Mobile-app
        </li>
        <li onClick={() => setMenu('Contact-Us')} className={menu === 'Contact-Us' ? 'active' : ''}>
          <FontAwesomeIcon icon={faEnvelope} className='menu-icon' /> Contact-Us
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='search icon' />
        <div className='navbar-search-icon'/>
        <img src={assets.basket_icon} alt='basket icon'/>
        <div className='dot'></div>
      </div>
      <button>Sign In</button>
    </div>
  );
};

export default Navbar;
