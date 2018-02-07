import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import './Home.css'


class Home extends Component {
  render(){
    return(
    <div className="home-main-container">
      <Navbar />
      <div className = "main-image-container"></div>
      <div className="main-image-lower">
        <div className="main-left-image"> </div>
       <div className="main-right-image"></div>
      </div>
        <section className="featured">

        </section>
        <Footer />

      </div>
    )
  }
}
export default Home;
