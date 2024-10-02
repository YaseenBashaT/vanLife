import React from "react";
import "./pay.css";

export default function Pay() {
    function payWithUPI() {
        const upiID = "8688157041@ybl";
        const amount = 500; 
        const name = "Yaseen Basha"; 
        const transactionNote = "Payment for services"; 

        const upiURL = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;

        window.location.href = upiURL;
    }
    

    return (
        <div className="payment-container">
            <h2>Payment Gateway</h2>
            <form action="/process-payment" method="post">
                <label htmlFor="cardholder-name">Cardholder Name</label>
                <input type="text" id="cardholder-name" name="cardholder_name" required />

                <label htmlFor="card-number">Card Number</label>
                <input type="number" id="card-number" name="card_number" required />

                <label htmlFor="expiry-date">Expiry Date</label>
                <input type="date" id="expiry-date" name="expiry_date" required />

                <label htmlFor="cvv">CVV</label>
                <input type="number" id="cvv" name="cvv" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" required />

                <label htmlFor="aadhaar-number">Aadhaar Card Number</label>
                <input type="number" id="aadhaar-number" name="aadhaar_number" required />

                <input type="submit" value="Pay Now" />
            </form>

            <button className="upi-payment" onClick={payWithUPI}>Pay via UPI</button>

            <div className="card-icons">
                <div class="card-icons">
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <i class="fab fa-cc-amex"></i>
                    <i class="fab fa-cc-paypal"></i>
                </div>
            </div>
        </div>
    );
}
