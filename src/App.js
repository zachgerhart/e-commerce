import React, { Component } from 'react';
import router from './router'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor (props){
    super(props)
  }


  componentDidMount(){
  axios.get('/api/test').then(response => console.log(response.data))

}

  render() {
    return (
      <div className="App">
          { router }
      </div>
    );
  }
}

export default App;
