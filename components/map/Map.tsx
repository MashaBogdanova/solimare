'use client';

import React from 'react';
import Link from 'next/link';
import { GoogleMap, InfoWindowF, useJsApiLoader } from '@react-google-maps/api';
import contacts from '../../configs/contacts.config';
import styles from './_map.module.scss';

const MAP_ZOOM = 15;
const GOOGLE_MAP_ID = 'google-map-script';
const GOOGLE_MAPS_API_KEY = 'AIzaSyAeZ1dXdRqqDkz8Tah7a-sOpVliw58qPSw';

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: GOOGLE_MAP_ID,
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (isLoaded) {
    return (
      <GoogleMap
        mapContainerClassName={styles.map}
        center={{ lat: contacts.latitude, lng: contacts.longitude }}
        zoom={MAP_ZOOM}
      >
        <InfoWindowF
          position={{ lat: contacts.latitude, lng: contacts.longitude }}
        >
          <>
            <h3>{contacts.googleMapName}</h3>
            <p>{contacts.googleMapDescription}</p>
            <p>{contacts.address}</p>
            <Link href={contacts.googleMapLink} className={styles.map__link}>
              View on Google Maps
            </Link>
          </>
        </InfoWindowF>
      </GoogleMap>
    );
  }
}

export default Map;
