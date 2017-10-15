import React, { Component } from 'react';

class ProductDetails extends React.Component {
  render() {
    return (
      <div className="ProductDetailsContainer">
        <h1>ProductDetails</h1>
    	<button className="checkout" onclick="end()">Checkout</button>
    	<div className="items" id="checkoutCart"></div>
      </div>
    );
  }
}

export default ProductDetails;