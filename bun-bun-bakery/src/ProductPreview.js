import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';

class ProductPreview extends Component {
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
    return <div className="flavor">
            <div onClick={() => this.goProductDetails(this.props)}>
              <img className="flavorImg" src={this.props.imagePath} alt=""></img>
              {this.props.name}<br></br>
              <span>${this.props.price}</span>
              <div id="checkOutTotals">
                {this.showCheckOutTotalsIfExists()}
              </div>
            </div>
            {this.showActionButton()}
         </div>
  }
}

export default ProductPreview;