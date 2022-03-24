import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Child from './Child'
import './Parent.css'

export default class Parent extends Component {
    state = {
        greet : "Hi I am "
    }
    greetingFromParent = (user) =>{
        this.setState({greet: "Hi I am " + user});
    }
  render() {
    return (
      <div>
          <Header/>
          <div className='container'>
              <Child greetingFromParent = {this.greetingFromParent}>{this.state.greet}</Child>
          </div>
          <Footer/>
      </div>
    )
  }
}
