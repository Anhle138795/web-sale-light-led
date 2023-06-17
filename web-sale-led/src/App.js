import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home.js';
import Nav from './Component/Home/Nav.js';
import Newsletter from './Component/Home/Newsletter.js';
import Footer from './Component/Home/Footer.js';
import Section from './Component/Home/Section.js';
class App extends Component {
  render(){
    return (
      <div className='_web'>
        <Home/>
        <Nav/>
        <Section/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}


export default App;
