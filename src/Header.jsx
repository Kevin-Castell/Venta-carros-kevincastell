import React from 'react';
import './Header.css';
import logo from './assets/AutoHive.png';
import carritoLogo from './assets/carritologo.png';

function Header({ cartCount, goToShoppingCart }) { // Recibe la función goToShoppingCart
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo de AutoHive" className="company-logo" />
        <div className="logo-text">
          <h1 className="company-name">AutoHive</h1>
          <p className="slogan">Donde comprar y vender autos es fácil</p>
        </div>
      </div>
      <div className="header-cart" onClick={goToShoppingCart} style={{ cursor: 'pointer' }}> {/* Añade onClick y estilo */}
        <img src={carritoLogo} alt="Carrito de Compras" className="cart-logo" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </div>
  );
}

export default Header;