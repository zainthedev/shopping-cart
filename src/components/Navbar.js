import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div id='navbar'>
      <Link
        className='navbar__link'
        onMouseEnter={(e) => (e.target.className = 'navbar__link--color')}
        to='/'
      >
        Home
      </Link>
      <Link
        className='navbar__link'
        onMouseEnter={(e) => (e.target.className = 'navbar__link--color')}
        to='/shop'
      >
        Shop
      </Link>
      <Link
        className='navbar__link'
        onMouseEnter={(e) => (e.target.className = 'navbar__link--color')}
        to='/cart'
      >
        View Cart ({props.cartSize})
      </Link>
    </div>
  );
};

export default Navbar;
