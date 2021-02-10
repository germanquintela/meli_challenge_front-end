import React, { ReactElement, useEffect } from 'react';

import { NextSeo } from 'next-seo';
import BreadCrumb from '../components/Shared/BreadCrumb';
import Container from '../components/Shared/Layout/Container/index/index';
import ProductList from '../components/Product/ProductsList';
import { SearchResultType } from '../types';
import { getItemsService } from '../services/getItemsService';
import { useFetch } from '../hook/useFetch';
import { useSearch } from '../contexts/search';
import ProductsListSkeleton from '../components/Sekeleton/ProductsListSkeleton';
import Skeleton from '../components/Sekeleton/Skeleton';

const index = (): ReactElement => {
  const { searchWord, setFocus } = useSearch();
  const [result, isLoading, error, getData] = useFetch<
    SearchResultType,
    { query: string; limit: number }
  >(getItemsService);

  useEffect(() => {
    getData({ query: searchWord, limit: 4 });
  }, [searchWord]);

  useEffect(() => {
    setFocus();
  }, []);

  return (
    <Container>
      <NextSeo
        title="Mercado Libre Argentina"
      />
      {result ? (
        <>
          {result.categories.length > 0 ? (
            <BreadCrumb
              title="Busquedas relacionadas"
              categories={result.categories}
            />
          ) : (<></>)}
          <ProductList items={result.items} />
        </>
      ) : (
        <>
          <Skeleton width={600} height={16} marginTop={24} marginBottom={24} dark />
          <ProductsListSkeleton items={4} />
        </>
      )}
    </Container>
  );
};

export default index;
