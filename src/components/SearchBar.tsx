import { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './';

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchPlacesByQuery } = useContext(PlacesContext);

  const onQueryChanged = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      searchPlacesByQuery(value);
    }, 350);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Find a place..."
        onChange={onQueryChanged}
      />
      <SearchResults />
    </div>
  );
};
