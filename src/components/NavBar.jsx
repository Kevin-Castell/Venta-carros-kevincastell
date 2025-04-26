import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Crea un archivo NavBar.css en la misma carpeta
import carritoLogo from './assets/carrito-logo.png'; // Reemplaza con la ruta de tu logo

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">AutoHive</Link> {/* Enlace al inicio */}
      </div>
      <div className="navbar-cart">
        <Link to="/shopping-cart">
          <img src={carritoLogo} alt="Carrito de Compras" className="cart-logo" />
          <span className="cart-count">0</span> {/* Inicialmente el contador es 0 */}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;