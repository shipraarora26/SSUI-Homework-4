import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="DefaultContainer">
        <h1 className="welcome">Welcome to Bun Bun Bake Shop</h1>
        <span>Est. 1982</span>

        <span className="welcomeText"> We are a small bakery that specializes in cinnamon rolls, from our famous classic cinnamon roll to a variety of   artisan   flavors. Our shop is located in Pittsburgh, PA, but we ship   fresh rolls to anywhere in the US!</span>
        <button onclick="location.href='products.html'">Explore our Menu</button>
      </div>
    );
  }
}

export default App;
