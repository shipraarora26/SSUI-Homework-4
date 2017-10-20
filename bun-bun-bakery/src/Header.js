import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HomePage from './HomePage';
import ProductMenu from './ProductMenu';
import ContactUs from './ContactUs';
import ShoppingCart from './ShoppingCart';

import './Header.css';


class Header extends Component {
  isActiveClass(target) {
    if (this.props.displayPage === target) {
      return 'activeNav'
    }
  }

  shoppingCartQuantity() {
    var amount = 0;

    Object.keys(localStorage).forEach(function(key){
       amount = Number(localStorage.getItem(key)) + amount;
    });

    return amount;
  }

  goHome() {
    this.setState({
      displayPage: 'HomePage'
    });
    ReactDOM.render(<HomePage displayPage="HomePage" />, document.getElementById('app'));
  }

  goProductMenu() {
    this.setState({
      displayPage: 'ProductMenu'
    });
    ReactDOM.render(<ProductMenu displayPage="ProductMenu" />, document.getElementById('app'));
  }

  goContactUs() {
    this.setState({
      displayPage: 'ContactUs'
    });
    ReactDOM.render(<ContactUs displayPage="ContactUs" />, document.getElementById('app'));
  }

  goShoppingCart() {
    this.setState({
      displayPage: 'ShoppingCart'
    });
    ReactDOM.render(<ShoppingCart displayPage="ShoppingCart" />, document.getElementById('app'));
  }

  render() {
    return (
      <div className="navContainer">
        <ul>
          <svg onClick={() => this.goHome() } id="logo" height="30px" viewBox="0 0 279 41">
            <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Tablet-Portrait" transform="translate(-173.000000, -43.000000)" fill="#FFFFFF">
                    <g id="Group" transform="translate(173.000000, 38.000000)">
                        <g id="cinnamon-roll" transform="translate(0.000000, 5.000000)" fillRule="nonzero">
                            <path d="M32.4350039,5.56507031 C28.8463789,1.97629687 24.0751523,0 19,0 C13.9249219,0 9.15362109,1.97629687 5.56492187,5.56507031 C1.97629687,9.15362109 0,13.9248477 0,19 C0,24.0751523 1.97629687,28.8463789 5.56492187,32.4350039 C9.15362109,36.0237031 13.9249219,38 19,38 C24.0751523,38 28.8463789,36.0237031 32.4350039,32.4350039 C36.0237031,28.8463789 38,24.0751523 38,19 C38,13.9248477 36.0237031,9.15362109 32.4350039,5.56507031 Z M19,36.4860859 C9.35816797,36.4860859 1.51391406,28.6419062 1.51391406,19 C1.51391406,9.35809375 9.35816797,1.51391406 19,1.51391406 C28.641832,1.51391406 36.4860859,9.35816797 36.4860859,19 C36.4860859,28.641832 28.641832,36.4860859 19,36.4860859 Z" id="Shape"></path>
                            <path d="M24.2770826,8.52389367 C21.2765215,6.39891778 17.6328079,5.57605001 14.0166633,6.20689289 C10.4006674,6.83758633 7.2453187,8.8466001 5.13201832,11.8635578 C4.25984256,13.1086562 3.55783656,14.4594056 3.04569245,15.8779241 C2.90286875,16.2734805 3.10603213,16.7107294 3.49950326,16.8542624 C3.89275146,16.9978701 4.32768754,16.7935915 4.47051124,16.3980351 C4.93688042,15.1063128 5.57639176,13.8760086 6.37128519,12.7413432 C8.25147529,10.0571041 11.0586819,8.26985295 14.2757821,7.70864712 C17.4929566,7.14736657 20.7348021,7.87952686 23.4041637,9.77011282 C27.7444587,12.8437814 28.7883647,18.8948071 25.731551,23.258853 C23.3341638,26.6815287 18.6144423,27.5046953 15.2106755,25.0941478 C12.5559529,23.214097 11.9172589,19.5129479 13.7871199,16.8435777 C14.4883828,15.8423584 15.5354099,15.1757257 16.7354411,14.9663663 C17.9353237,14.757231 19.1444951,15.0301753 20.1403226,15.7352877 C20.9037829,16.2759462 21.4120629,17.0831979 21.5717549,18.0082797 C21.731447,18.9333615 21.5230819,19.8656162 20.9854495,20.6332675 C20.1454499,21.8321902 18.4920538,22.1207506 17.2996022,21.2762894 C16.413902,20.6491077 16.2008554,19.4142456 16.8246874,18.5237582 C17.0430843,18.2119606 17.3692306,18.0043197 17.7429353,17.939091 C18.1165657,17.8736381 18.4932427,17.9588165 18.8033381,18.1786364 C19.0183168,18.3309114 19.1615863,18.5582031 19.2064695,18.8186696 C19.2514271,19.0792108 19.1927222,19.3417693 19.0413529,19.5578534 C18.8003657,19.9020038 18.8823296,20.3773588 19.2245269,20.6198183 C19.5667984,20.8620536 20.0395583,20.7797892 20.280694,20.4356388 C21.0746214,19.3023183 20.8033901,17.7307776 19.676257,16.932492 C19.0351108,16.4785063 18.2566399,16.3027699 17.4838165,16.4374115 C16.7111418,16.5722025 16.037002,17.0013819 15.5853462,17.6460475 C15.0500174,18.4103365 14.8427669,19.338407 15.0016416,20.2593793 C15.1605906,21.1804264 15.6666412,21.9840917 16.4267576,22.5222844 C18.3025634,23.8506185 20.9034856,23.3970064 22.2247164,21.5109035 C22.9956077,20.4104588 23.2940364,19.0739058 23.0653104,17.7476638 C22.8364358,16.4214218 22.1076039,15.2641916 21.0132414,14.4890686 C19.6865118,13.5494915 18.0753979,13.1854661 16.476471,13.464612 C14.8776183,13.7434591 13.4824492,14.631705 12.5479274,15.9657923 C10.1968352,19.3221185 10.9998284,23.975995 14.3379052,26.3400681 C15.92145,27.4615084 17.7420436,28.0000747 19.545843,28 C22.3977099,27.9999253 25.2075173,26.6536589 26.9709665,24.1363396 C30.5090114,19.0851882 29.3005831,12.0815098 24.2770826,8.52389367 Z" id="Shape"></path>
                            <path d="M4.2189037,18.0062065 C3.72337635,17.9570912 3.26405069,18.204778 3.19440468,18.5615033 C3.08010696,19.1470495 3.01481938,19.7441071 3.00014302,20.3363043 C2.9913372,20.696419 3.39026741,20.9936048 3.89122056,20.999936 C3.89664637,21 3.90198323,21 3.90749798,21 C4.40097953,21 4.80551343,20.7154767 4.8142303,20.3591991 C4.8274835,19.8198264 4.88690053,19.276041 4.99105823,18.7428717 C5.06079318,18.3860825 4.71505368,18.0562811 4.2189037,18.0062065 Z" id="Shape"></path>
                        </g>
                        <text id="Bun-Bun-Bake-Shop" fontFamily="Montez-Regular, Montez" fontSize="35" fontWeight="normal">
                            <tspan x="54" y="31">Bun Bun Bake Shop</tspan>
                        </text>
                    </g>
                </g>
            </g>
          </svg>

          <div className="navLinksRight">
            <li><a className={this.isActiveClass('HomePage')} onClick={() => this.goHome() }>Home</a></li>
            <li><a className={this.isActiveClass('ProductMenu')} onClick={() => this.goProductMenu() }>Menu</a></li>
            <li><a className={this.isActiveClass('ContactUs')} onClick={() => this.goContactUs() }>Contact Us</a></li>

            <li><a onClick={() => this.goShoppingCart() }>
            <svg className="shoppingCartIcon">
              <defs></defs>
                <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.850430254">
                    <g id="Home" transform="translate(-947.000000, -49.000000)" fillRule="nonzero" fill="#FFFFFF">
                        <g id="shopping-cart" transform="translate(947.000000, 49.000000)">
                            <path d="M25.6482099,17.3023256 C26.7138143,17.3023256 27.8252213,16.4704874 28.1179385,15.4537451 L30.9284536,5.69344558 C31.2211707,4.6768186 30.5887714,3.84498047 29.5231669,3.84498047 L9.68750894,3.84498047 C9.68750894,1.72146605 7.95259581,0 5.81249374,0 L0,0 L0,3.84498047 L5.81249374,3.84498047 L5.81249374,20.1860465 C5.81249374,21.7786679 7.11367859,23.0697674 8.71874061,23.0697674 L27.1249902,23.0697674 C28.1950121,23.0697674 29.0625268,22.2090344 29.0625268,21.147306 C29.0625268,20.0855777 28.1950121,19.224787 27.1249902,19.224787 L9.68750894,19.224787 L9.68750894,17.3023256 L25.6482099,17.3023256 Z M9.37209302,7.93023256 L26.6744186,7.93023256 L25.034474,13.6976744 L9.37209302,13.6976744 L9.37209302,7.93023256 Z M11.5348837,28.5969377 C11.5348837,29.9186047 10.4534992,31 9.13178775,31 L8.17053783,31 C6.8488264,31 5.76744186,29.9186047 5.76744186,28.5969377 L5.76744186,27.6356781 C5.76744186,26.3139535 6.8488264,25.2325581 8.17053783,25.2325581 L9.13178775,25.2325581 C10.4534992,25.2325581 11.5348837,26.3139535 11.5348837,27.6356781 L11.5348837,28.5969377 Z M28.8372093,28.5969377 C28.8372093,29.9186047 27.755814,31 26.4340893,31 L25.4728298,31 C24.1511628,31 23.0697674,29.9186047 23.0697674,28.5969377 L23.0697674,27.6356781 C23.0697674,26.3139535 24.1511628,25.2325581 25.4728298,25.2325581 L26.4340893,25.2325581 C27.755814,25.2325581 28.8372093,26.3139535 28.8372093,27.6356781 L28.8372093,28.5969377 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
             </svg>
            <span id="shoppingCartValue">{this.shoppingCartQuantity()}</span></a>
            </li>
          </div>
        </ul>
      </div>
      );
  }
}

export default Header;