import React ,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import { products } from './Shop'; 

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(item=>id);

  if (!product) {
    return <div style={{ color: 'white', marginTop: '100px' }}>Product not found!</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div style={{ color: 'white', marginTop: '100px' }}>
      <h2>{product.info}</h2>
      <p>Price: Rs.{product.price}</p>
      <p>Star: {product.star}</p>
      <img src={product.image} alt={product.info} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
