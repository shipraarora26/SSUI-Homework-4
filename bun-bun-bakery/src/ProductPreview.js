import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';

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

class ProductPreview extends Component {
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

  addToCart(item) {
    var quantity

    if (localStorage.getItem(item.name)) {
      quantity = Number(localStorage.getItem(item.name)) + 1
    } else {
      quantity = 1
    }

    localStorage.setItem(item.name, quantity);
    this.updateShoppingCartQuantity();
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
    ReactDOM.render(<ShoppingCart />, document.getElementById('app'))
  }

  goProductDetails(item) {
    var id = 0
    ReactDOM.render(<ProductDetails key={id++} name={item.name} price={item.price} imagePath={item.imagePath} description={item.description} />, document.getElementById('app'));
  }

  showCheckOutTotalsIfExists() {
    if (this.props.quantity && this.props.itemTotal) {
      return (<div>
                <small>
                  <p id="itemQuantity">Items: {this.props.quantity}</p>
                  <p id="itemTotal">Total: {this.props.itemTotal}</p>
                </small>
              </div>
              )
    }
  }

  showActionButton() {
    if (this.props.quantity && this.props.itemTotal) {
      return (<button onClick={() => this.removeFromCart(this.props) }>Remove From Cart</button>)
    } else {
      return (<button onClick={() => this.addToCart(this.props) }>Add to Cart</button>)
    }
  }

  render() {
    var a = this.props.imagePath;
  
    return <div className="flavor">
            <div onClick={() => this.goProductDetails(this.props)}>
              <img className="flavorImg" src={this.state[a]} alt=""></img>
              {this.props.name}<br></br>
              <span>$ {this.props.price}</span>
              <div id="checkOutTotals">
                {this.showCheckOutTotalsIfExists()}
              </div>
            </div>
            {this.showActionButton()}
         </div>
  }
}

export default ProductPreview;