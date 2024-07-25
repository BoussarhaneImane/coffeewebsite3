import React from "react";
import "./ShopCart2.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function ShopCart2({
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
            className="cart-modal"
            style={{
                display: visibility ? "block" : "none",
            }}
        >
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button className="btn close-icon" onClick={onClose}>
                        <AiFillCloseCircle size={30} />
                    </button>
                </div>
                <div className="product-list">
                    {products.length === 0 && (
                        <span className="empty-message">
                            Your basket is currently empty
                        </span>
                    )}
                    {products.map((product) => (
                        <div className="cart-item" key={product.id}>
                            <img src={product.img} alt={product.name} className="item-image" />
                            <div className="item-details">
                                <h3 className="item-name">{product.name}</h3>
                                <span className="item-price">${(product.price || 0).toFixed(2)}</span>
                            </div>
                            <select
                                className="quantity-select"
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
                                className="btn remove-icon"
                                onClick={() => onProductRemove(product.id)}
                            >
                                <RiDeleteBin6Line size={20} />
                            </button>
                        </div>
                    ))}
                    {products.length > 0 && (
                        <div className="total-amount">
                            Total: ${total.toFixed(2)}
                        </div>
                    )}
                    {products.length > 0 && (
                        <button className="btn checkout-button" onClick={redirectToCheckout}>
                            Proceed to Checkout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShopCart2;


