// En tu App.js o archivo de enrutamiento
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Products';
import ShoppingCars from './ShoppingCars';
import Landing from './Landing'; // Si tienes una página de inicio

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Tu página de inicio */}
        <Route path="/products" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCars />} /> {/* Ruta para el carrito */}
      </Routes>
    </Router>
  );
}

export default App;