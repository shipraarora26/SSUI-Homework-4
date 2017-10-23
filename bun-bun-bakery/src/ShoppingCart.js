import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Products from './products.json';
import HomePage from './HomePage';
import ProductDetails from './ProductDetails';

import bacon_image from './images/bacon.jpg';
import birthday_image from './images/birthday.jpg';
import blackberry_image from './images/blackberry.jpg';
import buttermilk_image from './images/buttermilk.jpg';
import caramelPecan_image from './images/caramelPecan.jpg';
import carrotCake_image from './images/carrotCake.jpg';
import cranberry_image from './images/cranberry.jpg';
import lemonLavender_image from './images/lemonLavender.jpg';
import mapleApplePecan_image from './images/mapleApplePecan.jpg';
import original_image from './images/original.jpg';
import originalGlutenFree_image from './images/originalGlutenFree.jpg';
import originalVegan_image from './images/originalVegan.jpg';
import pumpkinSpice_image from './images/pumpkinSpice.jpg';
import strawberryRhubarb_image from './images/strawberryRhubarb.jpg';
import walnut_image from './images/walnut.jpg';

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
    ReactDOM.render(<HomePage displayPage={HomePage} displayPageKey="HomePage"/>, document.getElementById('app'));
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
            <span className="total">Order Total: ${this.getOrderTotal()}</span>
            <button className="checkout" onClick={() => this.end()}>Checkout</button>

            <div className="shoppingCartItems" id="checkoutCart">
              {arr.map(item => <ItemPreview displayPage={this.props.displayPage} key={id++} name={item.name} price={item.price} imagePath={item.imagePath} description={item.description} quantity={localStorage.getItem(item.name)} itemTotal={(item.price * localStorage.getItem(item.name))}/>)}
            </div>
          </div>
  }
}

class ItemPreview extends Component {
    constructor(props) {
    super(props);

    this.state = {
      bacon_image: bacon_image,
      birthday_image: birthday_image,
      blackberry_image: blackberry_image,
      buttermilk_image: buttermilk_image,
      caramelPecan_image: caramelPecan_image,
      carrotCake_image: carrotCake_image,
      cranberry_image: cranberry_image,
      lemonLavender_image: lemonLavender_image,
      mapleApplePecan_image: mapleApplePecan_image,
      original_image: original_image,
      originalGlutenFree_image: originalGlutenFree_image,
      originalVegan_image: originalVegan_image,
      pumpkinSpice_image: pumpkinSpice_image,
      strawberryRhubarb_image: strawberryRhubarb_image,
      walnut_image: walnut_image
    };
  }
  
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
      return (<button className="itemRemove" onClick={() => this.removeFromCart(this.props) }>x</button>)
    }
  }

  render() {
    var a = this.props.imagePath;

    return <div className="shoppingCartFlavor">
            {this.showActionButton()}
             <div className="shoppingCartFlavorImg" onClick={() => this.goProductDetails(this.props)}>
              <img src={this.state[a]} alt=""></img>
             </div>
             <div className="shoppingCartFlavorInfo">
              <span className="itemName">{this.props.name}</span>
              <span className="itemQuantity">{this.props.quantity} <small>qty</small></span>
              <span className="itemPrice">Subtotal: ${this.showCheckOutTotalsIfExists()}</span>
             </div>
          </div>
  }
}

export default ShoppingCart;
