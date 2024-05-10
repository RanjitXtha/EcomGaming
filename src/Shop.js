import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import './shop.css';
import { sortReducer } from './Reducer/sortReducer';
import { products } from './data';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Shop = () => {
  const [sortedProducts, dispatch] = useReducer(sortReducer, products);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSortChange = (e) => {
    const sortType = e.target.value;
    switch (sortType) {
      case 'lowest':
        dispatch({ type: 'SORT_BY_PRICE_LOWEST' });
        break;
      case 'highest':
        dispatch({ type: 'SORT_BY_PRICE_HIGHEST' });
        break;
      case 'a-z':
        dispatch({ type: 'SORT_BY_NAME_A_TO_Z' });
        break;
      case 'z-a':
        dispatch({ type: 'SORT_BY_NAME_Z_TO_A' });
        break;
      default:
        break;
    }
  };

  // Filter products based on the search term
  const filteredProducts = sortedProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ margin: '10rem 5rem'}}>
      <div className='sort-search'>
        <input type="text" placeholder="Search" className="searchbar" value={searchTerm} onChange={handleSearchChange} />
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onChange={handleSortChange}>
              <option value="lowest">Price (Lowest)</option>
              <option value="highest">Price (Highest)</option>
              <option value="a-z">Name (A-Z)</option>
              <option value="z-a">Name (Z-A)</option>
            </select>
          </form>
        </div>
      </div>
        
        <div className="shop-products">
       
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'white' }}>
              <div className="shop-products-items" key={product.id}>
                <img src={product.image} alt={product.name} />
                
                <div className="shop-items-info">
                  <p>{product.name}</p>
                  <span>Price: Rs.{product.price}</span>
                  <span>
                    <StarRating rating={product.star} />
                  </span>
                </div>
               
              </div>
            </Link>
          ))}
          {filteredProducts.length === 0 && <p>No matching products found</p>}
        </div>

      </div>
  );
};

export default Shop;


export const StarRating = ({ rating, maxStars = 5 }) => {
  const stars = Array.from({ length: maxStars }, (_, index) => {
    return index < rating ? <FaStar key={index} color="gold" /> : <FaRegStar key={index} color="gray" />;
  });

  return <div>{stars}</div>;
};