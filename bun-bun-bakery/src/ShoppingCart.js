import React, { Component } from 'react';
import Header from './Header';
import Products from './products.json';
import ProductPreview from './ProductPreview';

class ShoppingCart extends Component {
  getOrderTotal() {
    var total = 0.00;

     Products.forEach(function(item) {
      if (localStorage.getItem(item.name)) {
        total = (item.price * localStorage.getItem(item.name)) + total
      }
    });

    return total;
  }

  render() {
    var json = [];
    var arr = [];

    Products.forEach(function(item) {
      if (localStorage.getItem(item.name)) {
        json.push(item)
      }
    });

    Object.keys(json).forEach(function(key) {
      arr.push(json[key]);
    });

    var id = 0
    return <div className="ShoppingCartContainer">
            <Header displayPage="ShoppingCart" />
            <h1>Your Shopping Cart</h1>
            <button className="checkout" onClick={() => this.getOrderTotal()}>Checkout</button>
            <div className="items" id="checkoutCart">
              {arr.map(item => <ProductPreview key={id++} name={item.name} price={item.price} imagePath={item.imagePath} description={item.description} quantity={localStorage.getItem(item.name)} itemTotal={(item.price * localStorage.getItem(item.name))}/>)}
            </div>
            <h1>Order Total: ${this.getOrderTotal()}</h1>
          </div>
  }
}

export default ShoppingCart;