import React, { useEffect } from "react";

function PaymentPage({ total }) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID";
        script.addEventListener("load", () => {
            window.paypal
                .Buttons({
                    createOrder: function (data, actions) {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: total,
                                    },
                                },
                            ],
                        });
                    },
                    onApprove: function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            console.log(details);
                            window.location.href = "/payment-success";
                        });
                    },
                })
                .render("#paypal-button-container");
        });
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [total]);

    return (
        <div>
           
            <div>Total: ${total}</div>
            <div id="paypal-button-container"></div>
        </div>
    );
}

export default PaymentPage;
