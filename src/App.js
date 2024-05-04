import { CartProvider } from './CartContext';
import Header from './header';
import Footer from './footer';
import Home from './Home';
import Shop from './Shop';
import './App.css';
import Product from './Product';
import Cart from './Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <CartProvider>
      <Router>
        
        <Header />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/mycart" element={<Cart />} />
        </Routes>
        <Footer />
        
      </Router>
      </CartProvider>
      </div>

  );
}

export default App;
