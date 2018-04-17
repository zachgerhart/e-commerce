import React, {Component} from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './Products.css'


class Products extends Component {
  constructor(){
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    axios.get('/api/products').then(response => {
      this.setState({products: response.data})
      console.log(response.data);
    })
  }



  render(){
     const allProducts = this.state.products.map((product, index) => {
      return (
        <div key={index} className="products">
          <img className="product-images" src={`${product.imageUrl}`} />
          <h5 className="product-price">{product.price}</h5>
          <h5 className="product.make">{product.make}</h5>
          <h5 className="product-model">{product.model}</h5>
          <p className="product-description">{product.description}</p>


        </div>
      )
    })
    return(
      <div className="products-main">
        <Navbar />
        <section className="productsCards">
          {allProducts}
        </section>
      </div>
    )
  }
}
export default Products;
