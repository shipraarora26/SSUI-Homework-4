import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Products from './products.json';
import ProductPreview from './ProductPreview';
import HomePage from './HomePage';

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

  end() {
    alert("This is the end of my prototype! You shopping cart is being reset! Better luck buying your cinnamon rolls next time!");
    localStorage.clear();
    //ReactDOM.render(<HomePage displayPage="HomePage" />, document.getElementById('app'));
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
            <span className="total">Order Total: ${this.getOrderTotal()}</span>
            <button className="checkout" onClick={() => this.end()}>Checkout</button>
            <div className="shoppingCartItems" id="checkoutCart">
              {arr.map(item => <ProductPreview key={id++} name={item.name} price={item.price} imagePath={item.imagePath} description={item.description} quantity={localStorage.getItem(item.name)} itemTotal={(item.price * localStorage.getItem(item.name))}/>)}
            </div>
          </div>
  }
}

export default ShoppingCart;