import React, { FC } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

interface MapProps {
  google: any
};

const MapContainer: FC<MapProps> = ({ google }) => (
  <Map
    google={google}
    // zoom={14}
    style={mapStyles}
    initialCenter={
      {
        lat: -1.2884,
        lng: 36.8233
      }
    }
  />
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDy2cVdB1Pl8qjs89WbpMiYXvK7WuEvypY'
})(MapContainer);
