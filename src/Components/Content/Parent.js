import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Child from './Child'
import './Parent.css'

export default class Parent extends Component {
   // Constructor 
   constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
}

componentDidMount() {
  fetch(
"https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
          this.setState({
              items: json,
              DataisLoaded: true
          });
          console.log(this.state);
      })
}
  render() {
    return (
      <div>
          <Header/>
          <div className='container'>
              <Child props = {this.state}></Child>
          </div>
          <Footer/>
      </div>
    )
  }
}
