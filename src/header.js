import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom';

import React ,{useContext} from 'react';
import { CartContext } from './CartContext';

const Header = () => {
    const [atTop, setAtTop] = useState(true);
    const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);

    const {cartItems} = useContext(CartContext);


    useEffect(() => {
        const handleScroll = () => {
            setAtTop(window.scrollY === 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const searchBarStyle = {
        width:'0px',opacity:'0',pointerEvents:'none'
      };
      
    return (
        <div className="header" style={ atTop ? null : {height:'0px' ,opacity:'0',pointerEvents: 'none'}}>
            <div className="logo">
                Treasure
            </div>
            <div className="header-nav">
                <nav><Link index to='/home'>Home</Link></nav>
                <nav><Link to='/shop'>Store</Link></nav>
                <nav>Community</nav>
                <nav>Support</nav>
            </div>

            <div className="header-icons">
                <input type="text" placeholder="Search" className="searchbar" style={isSearchBarClicked?searchBarStyle:null} />
                <nav>
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=>setIsSearchBarClicked(!isSearchBarClicked)} />
                </nav>
                <nav className="cart-item-number">
                    {
                        cartItems.length===0?null:<div>{cartItems.length}</div>
                    }
                   <Link to="/mycart"> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;
