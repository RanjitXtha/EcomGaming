import React ,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { products } from '../data';
import '../cssFiles/product.css';
import { StarRating } from './Shop';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(product => product.id=== parseInt(id));

  if (!product) {
    return <div style={{ color: 'white', marginTop: '100px' }}>Product not found!</div>;
  }

    const handleAddToCart = () => {
      addToCart(product,1);
    };

  return (
    <div>
            <div className="productpage">
                <div className="product-image">
                    <img src={product.image}/>
                    
                </div>

                <div className="product-info" style={{rowGap:'25px'}}>
                    <h2>{product.name}</h2>
                    <p className="product-price">Price: $ {product.price}</p>
                    <p><StarRating rating={product.star}/></p>
                    <p className="product-description">{product.description}</p>
                    <div>
                        <button className="buy-now-button" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>

                
            </div>
        </div>
  );
};

export default Product;
