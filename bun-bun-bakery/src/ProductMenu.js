import React, { Component } from 'react';

import Header from './Header';
import Products from './products.json';
import ProductPreview from './ProductPreview';

import './App.css';

class ProductMenu extends Component {
  render() {
    var json = Products;
    var arr = [];

    Object.keys(json).forEach(function(key) {
      arr.push(json[key]);
    });

    var id = 0
    return <div className="productMenu">
            <Header displayPage={ProductMenu} displayPageKey="ProductMenu"/>
            <div className="shoppingCartItems">
               {arr.map(item => <ProductPreview key={id++} name={item.name} price={item.price} imagePath={item.imagePath} description={item.description}/>)}
            </div>
         </div>
  }
}

export default ProductMenu;
