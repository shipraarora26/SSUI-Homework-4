import React, { Component } from 'react';

class ProductMenu extends React.Component {
  render() {
    return (
      <div className="ProductMenuContainer">
          <h1>Menu</h1>

		  <div className="items">
		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/bacon.jpg"></img>
		      Bacon<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/birthday.jpg"></img>
		      Birthday Cake<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/blackberry.jpg"></img>
		      Blackberry<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/buttermilk.jpg"></img>
		      Buttermilk<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/caramelPecan.jpg"></img>
		     Caramel Pecan<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/carrotCake.jpg"></img>
		      Carrot Cake<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/cranberry.jpg"></img>
		      Cranberry<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/lemonLavender.jpg"></img>
		      Lemon Lavendar<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/mapleApplePecan.jpg"></img>
		      Maple Apple Pecan<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/original.jpg"></img>
		      Original<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/originalGlutenFree.jpg"></img>
		      Original (Gluten-Free)<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/originalVegan.jpg"></img>
		      Original (Vegan)<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/pumpkinSpice.jpg"></img>
		      Pumpkin Spice<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/strawberryRhubarb.jpg"></img>
		      Strawberry Rhubarb<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>

		    <div className="flavor" onClick={() => this.goProductDetails() }>
		      <img className="flavorImg" src="/images/walnut.jpg"></img>
		      Walnut<br></br>
		      <span>$5.99</span>
		      <button>Add to Cart</button>
		    </div>
		  </div>
      </div>
    );
  }
}

export default ProductMenu;
