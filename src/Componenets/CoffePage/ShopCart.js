import React from "react";
import "./ShopCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function ShopCart({
    visibility,
    products,
    onProductRemove,
    onClose,
    onQuantityChange,
}) {
    const navigate = useNavigate();

    const total = products.reduce((total, product) => total + (product.price || 0) * (product.count || 1), 0);

    function redirectToCheckout() {
        navigate('/shop', { state: { products, total } });
    }

    // Debugging: Check the values
    console.log("Products:", products);
    console.log("Total:", total);

    return (
        <div
            className="modal"
            style={{
                display: visibility ? "block" : "none",
            }}
        >
            <div className="shoppingCart">
                <div className="header">
                    <h2>Shopping Cart</h2>
                    <button className="btn close-btn" onClick={onClose}>
                        <AiFillCloseCircle size={30} />
                    </button>
                </div>
                <div className="cart-products">
                    {products.length === 0 && (
                        <span className="empty-text">
                            Your basket is currently empty
                        </span>
                    )}
                    {products.map((product) => (
                        <div className="cart-product" key={product.id}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                
                                <span className="item-price">${(product.price || 0).toFixed(2)}</span>
                        
                            </div>
                            <select
                                className="count"
                                value={product.count || 1}
                                onChange={(event) => {
                                    onQuantityChange(product.id, event.target.value);
                                }}
                            >
                                {[...Array(10).keys()].map((number) => {
                                    const num = number + 1;
                                    return (
                                        <option value={num} key={num}>
                                            {num}
                                        </option>
                                    );
                                })}
                            </select>
                            <button
                                className="btn remove-btn"
                                onClick={() => onProductRemove(product.id)}
                            >
                                <RiDeleteBin6Line size={20} />
                            </button>
                        </div>
                    ))}
                    <center>
                    {products.length > 0 && (
                        <div className="total-price">
                            Total: ${total.toFixed(2)}
                        </div>
                    )}
                    {products.length > 0 && (
                        <button className="btn checkout-btn2" onClick={redirectToCheckout}>
                            Proceed to Checkout
                        </button>
                    )}
                    </center>
                </div>
            </div>
        </div>
    );
}

export default ShopCart;
