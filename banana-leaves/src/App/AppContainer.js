import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import Home from '../Home/Home.js'
import Welcome from '../Welcome/Welcome.js'
import Menu from '../Menu/Menu.js'
import Contact from '../Contact/Contact.js'
import About from '../About/About.js'


class AppContainer extends Component {
  render() {
    return (
      <div className="AppContainer">
        <Route exact path='/' render={()=>{
            return(
              <Welcome />
            ) } }
            />

        <Route exact path='/home' render={()=>{
          return(
            <Home />
          ) } }
        />

        <Route exact path='/menu' render={()=>{
          return(
            <Menu />
          ) } }
        />

        <Route exact path='/contact' render={()=>{
          return(
            <Contact />
          ) } }
        />

        <Route exact path='/about' render={()=>{
          return(
            <About />
          ) } }
        />
      </div>
    )
  }
}

export default AppContainer
