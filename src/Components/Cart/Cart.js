import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
 //   const total = cart.reduce( (total, prd) => total + course.price, 0)
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const Course = cart[i];
        total = total + Course.price;
    }
    const grandTotal = (total + Number()).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order summery: </h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Total Price: {grandTotal}</p>
            <button className="enroll-button">Review your order</button>

        </div>
    );
};

export default Cart;