import React, { FC, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

interface MapProps {
  google: any
};

const MapContainer: FC<MapProps> = ({ google }) => {
  const [ mapCenterLocation, setMapCenterLocation ] = useState(null);
  const [ markers, setMarkers ] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position, error) => {
      if (error) {
        console.log('Error occurred.');
      } else {
        setMapCenterLocation(position.coords);
      }
    });

    const markersRes = fetch('')
    .then(response => response.json())
    .then(response => setMarkers(response));
  }, []);

  return (
    <>
      {mapCenterLocation
        ? <Map
            google={google}
            style={mapStyles}
            zoom={15}
            initialCenter={{
              lat: mapCenterLocation?.latitude,
              lng: mapCenterLocation?.longitude,
            }}
          >
            {markers.map(marker => (
              <Marker
                key={marker.id}
                position={{ lat: marker.position?.latitude, lng: marker.position?.longitude }}
              />
            ))}
          </Map>
        : <h1>Loading...</h1>
      }
    </>
  )
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDy2cVdB1Pl8qjs89WbpMiYXvK7WuEvypY'
})(MapContainer);
