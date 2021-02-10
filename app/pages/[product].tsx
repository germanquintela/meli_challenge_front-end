import React, { ReactElement, useEffect } from 'react';

import { useRouter } from 'next/dist/client/router';
import { SkeletonTheme } from 'react-loading-skeleton';
import { NextSeo } from 'next-seo';
import BreadCrumb from '../components/Shared/BreadCrumb';
import Container from '../components/Shared/Layout/Container/index/index';
import ProductDetail from '../components/Product/ProductDetail';
import { getItemDetailService } from '../services/getItemDetailService';
import { useFetch } from '../hook/useFetch';
import { ItemDetailResultsType } from '../types';
import ProductDetailSkeleton from '../components/Sekeleton/ProductDetailSkeleton';
import Skeleton from '../components/Sekeleton/Skeleton';

const index = (): ReactElement => {
  const router = useRouter();

  const [result, isLoading, error, getData] = useFetch<
  ItemDetailResultsType,
  { productId: string }
>(getItemDetailService);

  useEffect(() => {
  }, [result, isLoading, error, getData]);

  useEffect(() => {
    if (router.query.product) {
      getData({ productId: router.query.product });
    }
  }, [router]);

  return (
    <Container>
      {result ? (
        <>
          <NextSeo
            title={`${result.title} | Mercado Libre Argentina`}
          />
          <BreadCrumb
            title="Busquedas relacionadas"
            categories={result.categories}
          />
          <ProductDetail
            picture={result.picture}
            description={result.description}
            price={result.price.amount}
            title={result.title}
            soldQuantity={result.sold_quantity}
            condition={result.condition}
            freeShipping={result.free_shipping}
            avaliableQuantity={result.available_quantity}
          />
        </>
      ) : (
        <>
          <Skeleton width={600} height={16} marginTop={24} marginBottom={24} dark />
          <ProductDetailSkeleton />
        </>
      )}
    </Container>
  );
};

export default index;
