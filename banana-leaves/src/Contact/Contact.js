import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../Contact/Map.css';

class Contact extends Component{

  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 38.914530,
        lng: -77.045600
      }
    };
  }

  render() {
    return(
      <div className="Map">
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={this.state.center}
        >
        <Marker
          position={this.state.center}
          icon='https://gif-avatars.com/img/100x100/dancing-banana.gif'
          className="Marker"
        />
        </Map>
        <h3>will need address, telephone, hours of operation, links to facebook, instagram, etc</h3>
      </div>
    )
  }
}

export default GoogleApiWrapper(
  (props)=>({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
}))(Contact)
