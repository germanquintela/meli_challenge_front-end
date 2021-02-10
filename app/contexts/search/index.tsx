import React, { ReactElement, createContext, useContext } from 'react';
import { State, initialState, useSearchProvider } from './useSearchProvider';

type Props = {
  children?: React.ReactNode;
};

const SearchContext = createContext(initialState);

const SearchProvider = ({ children }: Props): ReactElement => {
  const state = useSearchProvider();

  return (
    <SearchContext.Provider value={state}>
      {' '}
      {children}
      {' '}
    </SearchContext.Provider>
  );
};

const useSearch = (): State => useContext<State>(SearchContext);

export { SearchProvider, useSearch };
