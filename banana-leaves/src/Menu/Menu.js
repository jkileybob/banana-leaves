import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ItemShowPage from "/Users/jkileybob/Banana-Leaves/banana-leaves-frontend/banana-leaves/src/Menu/ItemShowPage.js"

class Menu extends Component {
  render(){
    return(
      <div>
        <h1>MENU</h1>
        <ItemShowPage />
      </div>
    )
  }
}
export default Menu
