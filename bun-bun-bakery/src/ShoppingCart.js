import React, { Component } from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="ShoppingCartContainer">
        <h1>Your Shopping Cart</h1>
    	<button className="checkout" onclick="end()">Checkout</button>
    	<div className="items" id="checkoutCart"></div>
      </div>
    );
  }
}

export default ShoppingCart;