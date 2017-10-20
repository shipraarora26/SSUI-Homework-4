import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ProductMenu from './ProductMenu';

class HomePage extends Component {
  goProductMenu() {
    ReactDOM.render(<ProductMenu displayPage="ProductMenu" />, document.getElementById('app'));
  }

  render() {
    return (
      <div className="WelcomeContainer">
        <Header displayPage="HomePage"/>
        <h1 className="welcome">Welcome to Bun Bun Bake Shop</h1>

        <span className="welcomeText"> We are a small bakery that specializes in cinnamon rolls, from our famous classic cinnamon roll to a variety of   artisan   flavors. Our shop is located in Pittsburgh, PA, but we ship   fresh rolls to anywhere in the US!</span>
        <button onClick={() => this.goProductMenu() }>Explore our Menu</button>
      </div>
    );
  }
}

export default HomePage;