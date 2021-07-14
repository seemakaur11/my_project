import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
import Home from './components/home/Home'
import Features from './components/home/Features'
import Footer from './components/home/Footer'
import Blog from './components/home/Blog'
import Address from './components/Address'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route exact path="/product" ><ProductList /></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/address" component={Address}></Route>
          <Route path="/features" component={Features}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
    <Footer/>
      </React.Fragment>

    )
  }
}

export default App
