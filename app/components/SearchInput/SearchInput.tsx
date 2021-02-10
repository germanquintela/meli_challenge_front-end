import React, { ReactElement, useState } from 'react';

import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';

import Search from '../Shared/Icons/Search';
import theme from '../../constants/theme';
import { useSearch } from '../../contexts/search';

const Wrapper = styled.div`
  position: relative;

  height: 40px;
  width: 100%;
`;

const Input = styled.input`
  padding-left: 16px;
  border: 0;

  width: 100%;
  height: 40px;

  border-radius: 2px;
  box-shadow: ${theme.searchShadow};

  color: ${theme.color.grey900};

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    font-size: 14px;
  }
`;

const IconWrapper = styled.div`
  border-left: 1px solid ${theme.color.grey100};
  padding: 0 10px;
`;

const SearchButton = styled.button`
  position: absolute;

  right: 0;
  top: 0;

  height: 40px;
  width: 40px;

  background-color: transparent;
  border: 0;

  cursor: pointer;
`;

const SearchInput = (): ReactElement => {
  const router = useRouter();
  const { handleSearchInput, inputRef } = useSearch();
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleSearch = (): void => {
    handleSearchInput(value);
    router.push('/');
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSearchInput(value);
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Buscar productos, marcas y más…"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        ref={inputRef}
      />
      <SearchButton onClick={handleSearch} aria-label="Aplicar busqueda">
        <IconWrapper>
          <Search color={theme.color.grey400} />
        </IconWrapper>
      </SearchButton>
    </Wrapper>
  );
};

export default SearchInput;
