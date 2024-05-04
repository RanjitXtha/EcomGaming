import React ,{useContext} from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);
  return (

    <div style={{marginTop:'100px'}}>
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.info}</p>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
