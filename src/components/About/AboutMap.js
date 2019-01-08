import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import './index.css';

const mapStyles = {
  width: '44%',
  height: '293px',
  borderRadius: '10px'
};

export const AboutMap = ({google}) => (
  <Map
    style={mapStyles}
    google={google}
    zoom={14}
    initialCenter={{lat: 40.761847, lng: -73.980545}}>

    <Marker
      name={'Ocean Prime American restaurant'}
    />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: ''
})(AboutMap);
