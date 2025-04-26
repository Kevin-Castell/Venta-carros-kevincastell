import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Asegúrate de que esta importación siga aquí

function Landing() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Bienvenido a AutoHive</h1>
      <p className="landing-introduction">
        La plataforma donde comprar y vender autos es fácil, rápido y seguro.
        Explora nuestra amplia selección de vehículos, tus preferencias y encuentra
        exactamente lo que buscas.
      </p>
      <p>Selecciona una opción:</p>
      <div className="landing-options">
        <ul>
          <li>
            <Link to="/products" className="landing-button">Ir a Productos</Link>
          </li>
          <li>
            <Link to="/shopping-cart" className="landing-button">Ir al Carrito de Compras</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Landing;