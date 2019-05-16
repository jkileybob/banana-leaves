import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MapContainer from '../Contact/MapContainer.js'

class Contact extends Component{
  render() {
    return(
      <div>
        <MapContainer />
        <h3>will need address, telephone, hours of operation, links to facebook, instagram, etc</h3>
      </div>
    )
  }
}

export default Contact
