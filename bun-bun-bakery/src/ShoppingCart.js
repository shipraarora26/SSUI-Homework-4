import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Products from './products.json';
import Header from './Header'
import ProductDetails from './ProductDetails';
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
    ReactDOM.render(<HomePage />, document.getElementById('app'));
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
    }
  }

  render() {
    return <div className="shoppingCartFlavor" onClick={() => this.goProductDetails(this.props)}>
             <div className="leftDes">
              <img className="ShoppingCartFlavorImg" src={this.props.imagePath} alt=""></img>
             </div>
              {this.props.name}<br></br>
              <span>{this.props.price}</span>
              <div id="checkOutTotals">
                {this.showCheckOutTotalsIfExists()}
              </div>
            {this.showActionButton()}
         </div>
  }
}

export default ShoppingCart;