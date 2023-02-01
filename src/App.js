import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    )
  }
}
