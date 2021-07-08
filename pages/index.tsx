import React, { FC, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

interface MapProps {
  google: any
};

const MapContainer: FC<MapProps> = ({ google }) => {
  const [ mapCenterLocation, setMapCenterLocation ] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position, error) => {
      if (error) {
        console.log('Error occurred.');
      } else {
        setMapCenterLocation(position.coords);
      }
    });
  }, [mapCenterLocation]);

  return (
    <>
      {mapCenterLocation
        ? <Map
            google={google}
            style={mapStyles}
            initialCenter={{
              lat: mapCenterLocation?.latitude,
              lng: mapCenterLocation?.longitude,
            }}
          />
        : <h1>Loading...</h1>
      }
    </>
  )
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDy2cVdB1Pl8qjs89WbpMiYXvK7WuEvypY'
})(MapContainer);
