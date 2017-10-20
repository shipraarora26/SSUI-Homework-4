import React, { Component } from 'react';
import Header from './Header';

import './ProductDetails.css';

class ProductDetails extends Component {
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
    return (
      <div className="ProductDetailsContainer">
        <Header displayPage="ProductMenu" />
        <h1>{this.props.name}</h1>

        <div className="productDes">
          <div className="flavorDes">
            <div className="leftDes">
              <img className="flavorDesImg" src={this.props.imagePath} alt=""></img>
              <span>{this.props.price}</span>
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