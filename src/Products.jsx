import React, { useState } from 'react';
import './Products.css';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import Header from './Header';

import carro1 from './assets/carro1.jpg';
import carro2 from './assets/carro2.jpg';
import carro3 from './assets/carro3.jpg';
import carro4 from './assets/carro4.jpg';
import carro5 from './assets/carro5.jpg';
import carro6 from './assets/carro6.jpg';
import carro7 from './assets/carro7.jpg';
import carro8 from './assets/carro8.jpg';
import carro9 from './assets/carro9.jpg';

function Products() {
  const [cartCount, setCartCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState({});
  const [cartItems, setCartItems] = useState([]); // Nuevo estado para los items del carrito
  const navigate = useNavigate(); // Hook para la navegación

  const carros = [
    { id: 1, nombre: 'Sedán Deportivo', imagen: carro1, valor: 25000, especificacion: 'Motor turbo, 4 puertas, asientos de cuero.', },
    { id: 2, nombre: 'SUV Familiar', imagen: carro2, valor: 32000, especificacion: '7 pasajeros, tracción 4x4, amplio espacio.', },
    { id: 3, nombre: 'Hatchback Urbano', imagen: carro3, valor: 18000, especificacion: 'Ágil, económico, ideal para la ciudad.', },
    { id: 4, nombre: 'Clásico Elegante', imagen: carro4, valor: 45000, especificacion: 'Motor V8, diseño atemporal, interiores de lujo.', },
    { id: 5, nombre: 'Pick-up Robusta', imagen: carro5, valor: 38000, especificacion: 'Capacidad de carga, ideal para trabajo pesado.', },
    { id: 6, nombre: 'Convertible Deportivo', imagen: carro6, valor: 52000, especificacion: 'Techo retráctil, motor de alto rendimiento.', },
    { id: 7, nombre: 'Eléctrico Compacto', imagen: carro7, valor: 28000, especificacion: 'Cero emisiones, conducción silenciosa.', },
    { id: 8, nombre: 'Monovolumen Espacioso', imagen: carro8, valor: 29500, especificacion: 'Ideal para familias grandes, múltiples configuraciones.', },
    { id: 9, nombre: 'Deportivo Híbrido', imagen: carro9, valor: 60000, especificacion: 'Potencia y eficiencia, diseño aerodinámico.', },
  ];

  const handleAddToCart = (carroId) => {
    const carroToAdd = carros.find(carro => carro.id === carroId);
    if (carroToAdd && !addedToCart[carroId]) {
      setCartCount(prevCount => prevCount + 1);
      setAddedToCart(prevState => ({ ...prevState, [carroId]: true }));
      setCartItems(prevItems => [...prevItems, { ...carroToAdd, quantity: 1 }]); // Añade el carro al carrito
    }
  };

  // Función para navegar al carrito y pasar los items
  const goToShoppingCart = () => {
    navigate('/shopping-cart', { state: { cart: cartItems } });
  };

  return (
    <div className="products-container">
      <Header cartCount={cartCount} goToShoppingCart={goToShoppingCart} /> {/* Pasa la función al Header */}
      <h1>Nuestra Selección de Carros</h1>
      <Link to="/" className="back-to-home-button">Volver a la Página Principal</Link>
      <div className="car-list">
        {carros.map((carro) => (
          <div key={carro.id} className="car-card">
            <img src={carro.imagen} alt={carro.nombre} className="car-image" />
            <h2 className="car-name">{carro.nombre}</h2>
            <p className="car-value">Valor: ${carro.valor}</p>
            <p className="car-specification">{carro.especificacion}</p>
            <button
              className={`add-to-cart-button ${addedToCart[carro.id] ? 'added' : ''}`}
              onClick={() => handleAddToCart(carro.id)}
              disabled={addedToCart[carro.id]}
            >
              {addedToCart[carro.id] ? 'Añadido' : 'Añadir al Carrito'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;