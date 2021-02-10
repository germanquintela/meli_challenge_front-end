/* eslint-disable @typescript-eslint/no-empty-function */
import { Ref, useRef, useState } from 'react';

export type State = {
  handleSearchInput: (value: string) => void;
  searchWord: string;
  inputRef: Ref<any>
  setFocus: () => void;
};

export const initialState: State = {
  handleSearchInput: () => {},
  searchWord: '',
  inputRef: null,
  setFocus: () => {},
};

export const useSearchProvider = (): State => {
  const inputRef = useRef<any>();
  const [state] = useState<State>(initialState);
  const [searchWord, setSearchWord] = useState(initialState.searchWord);

  const handleSearchInput = (value: string): void => {
    setSearchWord(value);
  };

  const setFocus = (): void => {
    inputRef.current.focus();
  };

  return {
    ...state,
    searchWord,
    handleSearchInput,
    inputRef,
    setFocus,
  };
};
