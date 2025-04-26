import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ShoppingCars.css'; // Importa el archivo de estilos
import carritoLogo from './assets/carritologo.png'; // Asegúrate de que la ruta sea correcta

export default function ShoppingCars() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState(location.state?.cart || []); // Usamos useState para poder actualizar los items

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.valor * item.quantity, 0);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="shopping-cart-container">
      <div className="cart-header">
        <img src={carritoLogo} alt="Carrito de Compras" className="cart-logo-page" />
        <span className="cart-count-page">{calculateTotalQuantity()}</span>
      </div>
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.imagen} alt={item.nombre} className="item-image" />
              <div className="item-details">
                <h2 className="item-name">{item.nombre}</h2>
                <p className="item-value">Valor: ${item.valor}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-item-button" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p className="cart-total">Total del Carrito: ${calculateTotal()}</p>
          <button className="checkout-button">Continuar al Pago</button>
          <Link to="/products" className="continue-shopping-button">Seguir Comprando</Link>
        </div>
      )}
    </div>
  );
}