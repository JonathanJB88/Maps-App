import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1Ijoiam9uYXRoYW5kZXY4OCIsImEiOiJjbGJkbGc0bG4wMDBtM3hwZ3VlZ3k2Z2JqIn0.AR_Dq_wuLs4Lz_4D5yk1yw',
  },
});

export default searchApi;
