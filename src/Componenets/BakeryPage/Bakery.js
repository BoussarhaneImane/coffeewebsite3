import React, { useState, useEffect } from 'react';
import './Bakery.css'; // Importation du fichier CSS pour les styles
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { orderList } from './DataHome';
import { useNavigate } from 'react-router-dom';
import ShopCart2 from './ShopCart2'

function Bakery() {
    const [cart, setCart] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false); // State to control cart visibility
  

    useEffect(() => {
        // Load cart data from localStorage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    useEffect(() => {
        // Save cart data to localStorage whenever cart changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price || 0), 0);
    };

    const handleCartClose = () => {
        setCartVisible(false);
    };

    

    const handleShowCart = () => {
        setCartVisible(true);
    };

    const Afficher = () => {
        return orderList.map(({ id, name, img, desc, price }) => {
            return (
                <div key={id} className="pastry-item">
                    <img src={img} alt={name} className="pastry-image" />
                    <h5 className="name">{name}</h5>
                    <h5 className="desc">{desc}</h5>
                    <h5 className="price">${(price || 0).toFixed(2)}</h5>
                    <div className="star">
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                    </div>
                    <button className="btn add-to-cart" onClick={() => addToCart({ id, name, img, desc, price })}>
                        Add to Cart
                    </button>
                </div>
            );
        });
    };

    return (
        <div className="bakery-container">
            <nav className="navbarX">
                <h1>Bakery Shop</h1>
                <button className="shopping-cart1" onClick={handleShowCart}>
                    Shopping Cart ({cart.length}) - ${calculateTotal().toFixed(2)}
                </button>
            </nav>
            <div className="box-orders">{Afficher()}</div>
            <p className="specials">Don't forget to check out our daily specials!</p>
            {isCartVisible && (
                <ShopCart2
                    visibility={isCartVisible}
                    products={cart}
                    onProductRemove={(id) => setCart(cart.filter(product => product.id !== id))}
                    onClose={handleCartClose}
                    onQuantityChange={(id, count) => {
                        setCart(cart.map(product =>
                            product.id === id ? { ...product, count: parseInt(count) } : product
                        ));
                    }}
                />
            )}
        </div>
    );
}

export default Bakery;
