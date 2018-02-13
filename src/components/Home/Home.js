import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import './Home.css'
import axios from 'axios';


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      featured: []
    }
  }
  componentDidMount(){
      axios.get('/api/featured').then(response => {
        this.setState({featured: response.data})
        console.log(response.data)
      })
  }




  render(){
      const featuredProducts = this.state.featured.map((product, index) => {
        return (
          <div key={index} className="featuredProducts">
            <img className="featured-images" src={`${product.imageUrl}`} />
            <h5 className="featured-price">${product.price} </h5>
            <h5 className="featured-make"> Make: {product.make} </h5>
            <h5 className='featured-model'> Model: {product.model} </h5>
            <p className="featured-description"> {product.description} </p>
          </div>
        )
      })


    return(
    <div className="home-main-container">
      <Navbar />
      <div className = "main-image-container"></div>
      <div className="main-image-lower">
        <div className="main-left-image"> </div>
       <div className="main-right-image"></div>
      </div>
        <section className="featured">
            {featuredProducts}
        </section>
        {/* <Footer /> */}

      </div>
    )
  }
}
export default Home;
