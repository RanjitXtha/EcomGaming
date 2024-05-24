import { CartProvider } from './Context/CartContext';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.css';
import Product from './pages/Product';
import Cart from './components/Cart';
import Blogs from './components/communities';
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
          <Route path="/blogs" element={<Blogs />} /> 
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
      </div>

  );
}

export default App;
