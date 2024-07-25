import React, { useState, useEffect } from "react";
import "./Coffe.css";
import { GiShoppingBag } from "react-icons/gi";
import ShopCart from "./ShopCart";
import coffePub1 from "./../HomePage/imgs/coin1.png";
import coffePub2 from "./../HomePage/imgs/coin2.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdSms } from "react-icons/md";
import img1 from "./imgC/c1.png";
import img2 from "./imgC/c2.png";
import img3 from "./imgC/c3.png";
import img4 from "./imgC/c4.png";
import img5 from "./imgC/c5.png";
import img6 from "./imgC/c6.png";
import img7 from "./imgC/c7.png";
import img8 from "./imgC/c8.png";
import img9 from "./imgC/c9.png";
import img10 from "./imgC/c10.png";
import img11 from "./imgC/c11.png";
import img12 from "./imgC/c12.png";

// Data
const products = [
    { id: 1, name: "Café Latte", rating: 4.3, description: "A perfect blend of espresso coffee and hot milk, ideal for those looking for a smooth and creamy drink.", price: 3.99, image: img1 },
    { id: 2, name: "Cappuccino", rating: 4.5, description: "A bold espresso mixed with creamy milk foam, served in a hot cup and ready to awaken your taste buds.", price: 4.49, image: img2 },
    { id: 3, name: "Espresso", rating: 4.8, description: "A concentrated dose of caffeine in a small espresso shot, perfect for lovers of strong and robust coffee.", price: 2.49, image: img3 },
    { id: 4, name: "Mocha", rating: 4.2, description: "A decadent blend of coffee, chocolate, and milk, topped with whipped cream and chocolate shavings, ideal for a sweet indulgence.", price: 4.99, image: img4 },
    { id: 5, name: "Macchiato", rating: 4.0, description: "A bold espresso with a touch of frothy milk, offering a balanced and refreshing coffee experience.", price: 3.79, image: img5 },
    { id: 6, name: "Café Frappé", rating: 4.4, description: "An iced blend of coffee, milk, and crushed ice, perfect for cooling down on hot summer days.", price: 5.49, image: img6 },
    { id: 7, name: "Café Americano", rating: 4.1, description: "A simple, strong, and robust black coffee, perfect for those who prefer a no-frills coffee.", price: 3.29, image: img7 },
    { id: 8, name: "Café au Lait", rating: 4.6, description: "A combination of black coffee and hot milk, offering a smooth and comforting drink to start the day.", price: 4.19, image: img8 },
    { id: 9, name: "Irish Coffee", rating: 4.7, description: "A blend of coffee, Irish whiskey, sugar, and cream, for a hot and boozy drink with a touch of sweetness.", price: 6.99, image: img9 },
    { id: 10, name: "Affogato", rating: 4.3, description: "A classic Italian dessert that marries a hot espresso with a scoop of vanilla ice cream, creating a deliciously contrasting fusion of hot and cold.", price: 5.79, image: img10 },
    { id: 11, name: "Viennese Coffee", rating: 4.4, description: "A black coffee mixed with whipped cream and sprinkled with chocolate, offering a luxurious and creamy coffee experience.", price: 4.89, image: img11 },
    { id: 12, name: "Café de Olla", rating: 4.0, description: "A traditional Mexican coffee brewed with cinnamon and piloncillo, offering a uniquely sweet and spicy flavor.", price: 5.49, image: img12 }
];

export default function Coffe() {
    const [cartsVisibility, setCartVisibility] = useState(false);
    const [productsInCart, setProductsInCart] = useState([]);

    useEffect(() => {
        const cartFromStorage = JSON.parse(localStorage.getItem("shopping-cart")) || [];
        setProductsInCart(cartFromStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
    }, [productsInCart]);

    const addProductToCart = (product) => {
        setProductsInCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, count: 1 }];
            }
        });
    };

    const handleQuantityChange = (productId, count) => {
        setProductsInCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, count: count } : item
            )
        );
    };

    const handleProductRemove = (productId) => {
        setProductsInCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const calculateTotal = () => {
        return productsInCart.reduce((acc, item) => acc + item.price * item.count, 0);
    };

    return (
        <div className="App">
            <ShopCart
                visibility={cartsVisibility}
                products={productsInCart}
                onClose={() => setCartVisibility(false)}
                onQuantityChange={handleQuantityChange}
                onProductRemove={handleProductRemove}
            />

            <div className="navbar">
                <h3 className="logo">Order Your Coffee</h3>
                <button className="shopping-cart2" onClick={() => setCartVisibility(true)}>
                    Shopping Cart ({productsInCart.length}) - ${calculateTotal().toFixed(2)}
                </button>
            </div>

            <main>
                <div className="Boxproducts">
                    {products.map((product) => (
                        <div className="productbox" key={product.id}>
                            <img className="product-image" src={product.image} alt={product.name} />
                            <p className="product-p">
                                {product.description.length > 100
                                    ? product.description.substring(0, 100) + "..."
                                    : product.description}
                            </p>
                            <span className="product-price">${product.price.toFixed(2)}</span>
                            <div className="buttons">
                                <button className="btn" onClick={() => alert(product.description)}>
                                    Detail
                                </button>
                                <button className="btn" onClick={() => addProductToCart(product)}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <p className="specials2">Don't forget to check out our daily specials!</p>
           
         
           
           
        </div>
    );
}
