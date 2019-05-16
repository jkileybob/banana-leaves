import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../Contact/Map.css';


export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 38.914530,
        lng: -77.045600
      },
    };
  }

  render() {

    return(
      <div className='Map'>
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={this.state.center}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper(
  (props)=>({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
}))(MapContainer)
