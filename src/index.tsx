/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  'pk.eyJ1Ijoiam9uYXRoYW5kZXY4OCIsImEiOiJjbGJkbGc0bG4wMDBtM3hwZ3VlZ3k2Z2JqIn0.AR_Dq_wuLs4Lz_4D5yk1yw';

if (!navigator.geolocation) {
  alert('Your browser has no a Geolocation option activated');
  throw new Error('Your browser has no a Geolocation option activated');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
