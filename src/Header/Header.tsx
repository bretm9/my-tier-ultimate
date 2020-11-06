import React from 'react';
import { Link } from 'react-router-dom';

// import ../image/logo.png

function Header() {
  return (
    <section className='nav'>
      {/* <img className='logo' src='../image/logo.png'></img> */}
      <Link className='nav-button' to='/mains'>Mains</Link>
    </section>
  )
}

export default Header;