import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1Ijoiam9uYXRoYW5kZXY4OCIsImEiOiJjbGJkbGc0bG4wMDBtM3hwZ3VlZ3k2Z2JqIn0.AR_Dq_wuLs4Lz_4D5yk1yw',
  },
});

export default directionsApi;
