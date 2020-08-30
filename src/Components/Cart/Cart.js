import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
 //   const total = cart.reduce( (total, prd) => total + prd.price, 0)
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order summery: </h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            <button className="btn btn-primary enroll-button">Review your order</button>

        </div>
    );
};

export default Cart;