'use client';

import React from 'react';
import { GoogleMap, InfoWindowF, useJsApiLoader } from '@react-google-maps/api';
import contacts from '../../configs/contacts.config';
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
        center={{ lat: contacts.latitude, lng: contacts.longitude }}
        zoom={15}
      >
        <InfoWindowF
          position={{ lat: contacts.latitude, lng: contacts.longitude }}
        >
          <div>
            <h3>{contacts.googleMapName}</h3>
            <p style={{ fontWeight: 'bold' }}>{contacts.googleMapDescription}</p>
            <p>{contacts.address}</p>
            <a href={contacts.googleMapLink}>View on Google Maps</a>
          </div>
        </InfoWindowF>
      </GoogleMap>
    );
  }
}

export default Map;
