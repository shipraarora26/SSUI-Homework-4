import React, { Component } from 'react';
import Header from './Header';

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

import './ProductDetails.css';

class ProductDetails extends Component {
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

  updateShoppingCartQuantity() {
    var amount = 0;

    Object.keys(localStorage).forEach(function(key){
       amount = Number(localStorage.getItem(key)) + amount;
    });

    document.getElementById("shoppingCartValue").innerHTML = amount;
  }

  render() {
    var a = this.props.imagePath;

    return (
      <div className="ProductDetailsContainer">
        <Header displayPage="ProductMenu" />
        <h1>{this.props.name}</h1>

        <div className="productDes">
          <div className="flavorDes">
            <div className="leftDes">
              <img className="flavorDesImg" src={this.state[a]} alt=""></img>
              <span>$ {this.props.price}</span>
              <button onClick={() => this.addToCart(this.props)}>Add to Cart</button>
            </div>

            <span className="description"> {this.props.description} </span>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails;
