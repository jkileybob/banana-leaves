import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../Contact/Contact.css';

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

  // cDM finds map div ele relative to css positioning
  // in browser and sets to variable that adjusts styling
  // if css is adjusted, querySelector path must also be adjusted
  componentDidMount(){
    let outerDiv = document.querySelector("#root > div > div.AppContainer > div")
    outerDiv.className = "outer-div"
    outerDiv.style = "position: relative;"

    let mapDiv = document.querySelector("#root > div > div.AppContainer > div > div.contact-info > div")
    mapDiv.style = "align-self: center; position: fixed; z-index: -1;"
    mapDiv.id = 'mapDiv'
    // console.log(mapDiv)
  }

  render() {
    return(
      <div className="contact-info">
        <Map
          className='map'
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
        <div id="contact-text">
          <div className="address">
            <h3 id="address">will need address</h3>
          </div>
          <div className="telephone">
            <h3 id="telephone">will need telephone</h3>
          </div>
          <div className="hours-operation">
            <h3 id="hours-operation">will need hours of operation</h3>
          </div>
          <div className="social-media">
            <h3 id="social-media>">will need links to facebook, instagram, etc</h3>
          </div>
        </div>
    </div>
    )
  }
}

export default GoogleApiWrapper(
  (props)=>({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
}))(Contact)
