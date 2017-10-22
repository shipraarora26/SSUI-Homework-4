import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Products from './products.json';
import ProductDetails from './ProductDetails';

import './ShoppingCart.css';

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
    return <div className="shoppingCartContainer">
            <div className="shoppingCartContainerHeader">
              <span className="total">Order Total: ${this.getOrderTotal()}</span>
              <button className="checkout" onClick={() => this.end()}>Checkout</button>
            </div>

            <div className="shoppingCartItems" id="checkoutCart">
              {arr.map(item => <ItemPreview displayPage={this.props.displayPage} key={id++} name={item.name} price={item.price} imagePath={item.imagePath} description={item.description} quantity={localStorage.getItem(item.name)} itemTotal={(item.price * localStorage.getItem(item.name))}/>)}
            </div>
          </div>
  }
}

class ItemPreview extends Component {
  removeFromCart(item) {
    var quantity

    if (localStorage.getItem(item.name)) {
      quantity = Number(localStorage.getItem(item.name)) - 1
    } else {
      quantity = 0
    }

    if (quantity < 1) {
      localStorage.removeItem(item.name)
    } else {
      localStorage.setItem(item.name, quantity);
    }

    this.updateShoppingCartQuantity();
    this.updateItemQuantity();
  }

  updateShoppingCartQuantity() {
    var amount = 0;

    Object.keys(localStorage).forEach(function(key){
       amount = Number(localStorage.getItem(key)) + amount;
    });

    document.getElementById("shoppingCartValue").innerHTML = amount;
  }

  updateItemQuantity() {
    var Target = this.props.displayPage
    ReactDOM.render(<Target displayPage={Target} displayPageKey="{Target}" />, document.getElementById('app'));
  }

  goProductDetails(item) {
    var id = 0
    ReactDOM.render(<ProductDetails key={id++} name={item.name} price={item.price} imagePath={item.imagePath} description={item.description} />, document.getElementById('app'));
  }

  showCheckOutTotalsIfExists() {
    if (this.props.quantity && this.props.itemTotal) {
      return (this.props.itemTotal)
    }
  }

  showActionButton() {
    if (this.props.quantity && this.props.itemTotal) {
      return (<button className="itemRemove" onClick={() => this.removeFromCart(this.props) }>X</button>)
    }
  }

  render() {
    return <div className="shoppingCartFlavor">
            {this.showActionButton()}
             <div className="shoppingCartFlavorImg" onClick={() => this.goProductDetails(this.props)}>
              <img src={this.props.imagePath} alt=""></img>
             </div>
             <div className="shoppingCartFlavorInfo">
              <span className="itemPrice">${this.showCheckOutTotalsIfExists()}</span>
              <span className="itemName">{this.props.name}</span>
              <span className="itemQuantity">{this.props.quantity} <small>qty</small></span>
             </div>
          </div>
  }
}

export default ShoppingCart;
