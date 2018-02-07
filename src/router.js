import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// import components to be rendered
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Detailed from './components/Detailed/Detailed.js';
import Home from './components/Home/Home.js';
import Products from './components/Products/Products.js'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.js'


export default  (
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/ShoppingCart' component={ShoppingCart} />
    <Route path='/Products' component={Products} />
    <Route path='/About' component={About} />
    </Switch>
  </BrowserRouter>

)
