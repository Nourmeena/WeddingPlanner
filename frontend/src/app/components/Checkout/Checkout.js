"use client";
import { useState } from 'react';
import styles from './Checkout.module.css';

const Checkout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    const togglePopup = () => setIsOpen(!isOpen);

    return (
        <div>
            <div id="cartImage" style={{ cursor: 'pointer' }} onClick={togglePopup}>
                    Testing Checkout Page
            </div>

            {isOpen && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <span className={styles.closeBtn} onClick={togglePopup}>&times;</span>
                        <h2 className={styles.Checkout}>Check Out</h2>

                        <div className={styles.checkoutContainer}>
                            <div className={styles.paymentDetails}>
                                <h2>Payment Details</h2>
                                <div>
                                    <input 
                                        type="radio" 
                                        id="creditCard" 
                                        name="payment" 
                                        value="creditCard" 
                                        checked={paymentMethod === 'creditCard'}
                                        onChange={() => setPaymentMethod('creditCard')}
                                    />
                                    <label htmlFor="creditCard">Credit Card</label><br />

                                    <input 
                                        type="radio" 
                                        id="paypal" 
                                        name="payment" 
                                        value="paypal" 
                                        checked={paymentMethod === 'paypal'}
                                        onChange={() => setPaymentMethod('paypal')}
                                    />
                                    <label htmlFor="paypal">PayPal</label><br />

                                    <input 
                                        type="radio" 
                                        id="cash" 
                                        name="payment" 
                                        value="cash" 
                                        checked={paymentMethod === 'cash'}
                                        onChange={() => setPaymentMethod('cash')}
                                    />
                                    <label htmlFor="cash">Cash</label>
                                </div>

                                {paymentMethod === 'creditCard' && (
                                    <div className={styles.paymentInfo}>
                                        <label>Cardholder's Name</label>
                                        <input type="text" required />

                                        <label>Card Number</label>
                                        <input type="text" required />

                                        <label>Expiration Date</label>
                                        <input type="text" placeholder="MM/YY" required />

                                        <label>CVV</label>
                                        <input type="text" required />

                                        <label>Billing Address</label>
                                        <input type="text" required />

                                        <label>Email Address</label>
                                        <input type="email" required />

                                        <label>Phone Number</label>
                                        <input type="tel" required />

                                        <label>Shipping Address</label>
                                        <input type="text" required />
                                    </div>
                                )}

                                {paymentMethod === 'paypal' && (
                                    <div className={styles.paymentInfo}>
                                        <label>PayPal Account Credentials</label>
                                        <input type="text" required />

                                        <label>Payment Amount</label>
                                        <input type="text" required />

                                        <label>Shipping Address</label>
                                        <input type="text" required />

                                        <label>Billing Information</label>
                                        <input type="text" required />

                                        <label>Email Address</label>
                                        <input type="email" required />

                                        <label>Phone Number</label>
                                        <input type="tel" required />
                                    </div>
                                )}

                                {paymentMethod === 'cash' && (
                                    <div className={styles.paymentInfo}>
                                        <label>Phone Number</label>
                                        <input type="tel" required />

                                        <label>Shipping Address</label>
                                        <input type="text" required />
                                    </div>
                                )}

                                <button className={styles.payBtn}>Pay</button>
                            </div>

                            <div className={styles.orderSummary}>
                                <h2>Order Summary</h2>
                                <div id="cartItemsSummary">
                                    {/* هنا هيتعرض ملخص الطلب */}
                                </div>
                                <hr />
                                <div className={styles.coupons}>
                                    <label>Coupon Code</label>
                                    <input type="text" />
                                    <button className={styles.applyBtn}>Apply</button>
                                </div>
                                <hr />
                                <div className={styles.totals}>
                                    <div>SubTotal: <span id="subtotal">0</span></div>
                                    <div>Tax: <span id="tax">0</span></div>
                                    <div>Shipping: <span id="shipping">0</span></div>
                                    <div><strong>Total: <span id="total">0</span></strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
