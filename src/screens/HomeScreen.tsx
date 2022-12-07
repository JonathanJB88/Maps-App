import { MapView, ReactLogo, BtnMyLocation, SearchBar } from '../components';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  );
};
