'use client';

import React from 'react';
import Link from 'next/link';
import { GoogleMap, InfoWindowF, useJsApiLoader } from '@react-google-maps/api';
import contacts from '../../configs/contacts.config';
import styles from './_map.module.scss';

const MAP_ZOOM = 15;
const GOOGLE_MAP_ID = 'google-Map-script';
const GOOGLE_MAPS_API_KEY = 'AIzaSyCSI67Sqe4gEVLyiVG56LTu7rHcz6T1f0o';

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
            <h3 className={styles.map__title}>{contacts.googleMapName}</h3>
            <p className={styles.map__text}>{contacts.googleMapDescription}</p>
            <p className={styles.map__text}>{contacts.address}</p>
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
