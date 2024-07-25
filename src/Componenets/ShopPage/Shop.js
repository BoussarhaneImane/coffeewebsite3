import React from "react";
import { useLocation } from "react-router-dom";
import PaymentPage from "./PaymentPage";
import './Shop.css';

function Shop() {
    const location = useLocation();
    const { products, total } = location.state || { products: [], total: 0 };

    return (
        <div className="shop-container">
            <h2>Order Summary</h2>
            <div className="order-summary">
                {products.map(product => (
                    <div key={product.id}>
                        <p>{product.name} - ${product.price.toFixed(2)}</p>
                    </div>
                ))}
                <h3>Total: ${total.toFixed(2)}</h3>
            </div>

            <h2>User Information</h2>
            <form className="user-info">
                <div>
                    <label>Name</label>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" name="address" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" required />
                </div>
            </form>

            <div className="payment-section">
                <h2>Payment</h2>
                <PaymentPage total={total} />
            </div>
        </div>
    );
}

export default Shop;
