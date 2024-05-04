import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import './shop.css';
import cooler from './images/cooler.avif'
import { sortReducer } from './cartReducer';

export const products = [
  { id: 0, price: '110', star: 4, info: 'Dahua DHI-LM22-C201P Monitor - 21.5" IPS display, Full-HD resolution, 100Hz Refresh Rate', image: cooler },
  { id: 1, price: '111', star: 4, info: 'Aahua DHI-LM22-C201P Monitor - 21.5" IPS display, Full-HD resolution, 100Hz Refresh Rate', image: cooler },
  { id: 2, price: '112', star: 4, info: 'DSahua DHI-LM22-C201P Monitor - 21.5" IPS display, Full-HD resolution, 100Hz Refresh Rate', image: cooler },
  { id: 3, price: '113', star: 4, info: 'Dahua DHI-LM22-C201P Monitor - 21.5" IPS display, Full-HD resolution, 100Hz Refresh Rate', image: cooler },
  { id: 4, price: '114', star: 4, info: 'xahua DHI-LM22-C201P Monitor - 21.5" IPS display, Full-HD resolution, 100Hz Refresh Rate', image: cooler },
  { id: 5, price: '114', star: 4, info: 'bahua DHI-LM22-C201P Monitor - 21.5" IPS display, Full-HD resolution, 100Hz Refresh Rate', image: cooler },
];

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
    product.info.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <div className="shop">
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

        <div className="shop-products">
          <input type="text" placeholder="Search" className="searchbar" value={searchTerm} onChange={handleSearchChange} />
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'white' }}>
              <div className="shop-products-items" key={product.id}>
                <img src={product.image} alt={product.info} />
                <p className="shop-items-info">{product.info}</p>
                <div>
                  <p className="price">Price: Rs.{product.price}</p>
                </div>
                <div>
                  Star: {product.star}
                </div>
              </div>
            </Link>
          ))}
          {filteredProducts.length === 0 && <p>No matching products found</p>}
        </div>

      </div>
    </div>
  );
};

export default Shop;
