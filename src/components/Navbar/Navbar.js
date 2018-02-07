import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import Products from '../Products/Products.js'
import ShoppingCart from '../ShoppingCart/ShoppingCart.js'
import About from '../About/About.js'
import './Navbar.css'

class Navbar extends Component {
  render () {
    return (
        <div className = "main-container">
          <div className = "nav-logo"></div>
          <Link to ='/About'  className="About">About</Link>
          <Link to ='/Products'  className="Products">Products</Link>
          <Link to ='/ShoppingCart'  className="ShoppingCart">Cart</Link>
        </div>
    )
  }
}
export default Navbar;
