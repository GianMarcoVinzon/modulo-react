import React from 'react';
import './Header.css';
import img from './amazon-logo.png'

console.log(img);
function Header() {
  return (
    <header className="header">
      <img className='header-logo ' src={img} alt="Logo" />
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <button>Search</button>
      </div>
      <div className="header-nav">
        <div className="header-navOption">
          <span>Hello Guest</span>
          <span>Sign In</span>
        </div>
        <div className="header-navOption">
          <span>Returns</span>
          <span>& Orders</span>
        </div>
        <div className="header-navOption">
          <span>Your</span>
          <span>Prime</span>
        </div>
        <div className="header-navBasket">
          <span>0</span>
          <span>Basket</span>
        </div>
      </div>
    </header>
  );
}

export default Header;