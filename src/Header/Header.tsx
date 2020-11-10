import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

import logo from '../images/my-tier-ultimate-logo-white.png'

const clearLocalStorage = () => {
  localStorage.clear();
  window.location.reload();
}

function Header() {
  return (
    <section>
      <div className='nav-spacer'></div>
      <section className='nav'>
        <Link className='nav-left' to='/'>
          <img className='logo' src={logo} alt='my-tier-ultimate-logo'></img>
          <h3>The data is My Tier than the sword</h3>
        </Link>
        <section className='nav-right'>
          <Link className='nav-button' to='/tier-list'>Tier-List</Link>
          <Link className='nav-button' to='/mains'>Mains</Link>
          
        </section>
        <button className='reset-button' onClick={clearLocalStorage}>Reset</button>
      </section>
    </section>
  )
}

export default Header;