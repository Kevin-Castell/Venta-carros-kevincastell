import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Landing from './Landing';
import Products from './Products';
import ShoppingCars from './ShoppingCars';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCars />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);