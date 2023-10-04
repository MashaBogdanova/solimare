'use client';

import React from 'react';
import { GoogleMap, InfoWindowF, useJsApiLoader } from '@react-google-maps/api';
import addressInfo from '../../configs/address.config';
import styles from './_map.module.scss';

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAeZ1dXdRqqDkz8Tah7a-sOpVliw58qPSw',
  });

  if (isLoaded) {
    return (
      <GoogleMap
        mapContainerClassName={styles.map}
        center={{ lat: addressInfo.latitude, lng: addressInfo.longitude }}
        zoom={15}
      >
        <InfoWindowF
          position={{ lat: addressInfo.latitude, lng: addressInfo.longitude }}
        >
          <div>
            <h3>{addressInfo.name}</h3>
            <p style={{ fontWeight: 'bold' }}>{addressInfo.description}</p>
            <p>{addressInfo.address}</p>
            <a href={addressInfo.googleMapLink}>View on Google Maps</a>
          </div>
        </InfoWindowF>
      </GoogleMap>
    );
  }
}

export default Map;
