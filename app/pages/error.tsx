import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import Button from '../components/Shared/Button';
import EmptyIlustration from '../components/Shared/Icons/EmptyIlustration';
import { Body1 } from '../components/Shared/Typo/Body';
import { Title2 } from '../components/Shared/Typo/Titles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Title2)`
  font-size: 40px;
  margin-top: 40px;
  margin-bottom: 0;
`;

const Description = styled(Body1)`
  margin-bottom: 32px;
`;

const error = () => {
  const router = useRouter();

  const getMessage = (err: string | string[] | undefined): string => {
    switch (err) {
      case '500':
        return 'Hubo un problema inesperado, por favor intenta mas tarde ';
      case '400':
        return 'No pudimos procesar tu solicitud ';
      default:
        return 'No encontramos lo que estabas buscando';
    }
  };

  return (
    <Wrapper>
      <EmptyIlustration />
      <Title bold>{router.query.status || 404}</Title>
      <Description>{getMessage(router.query.status)}</Description>
      <Button href="/" type="primary">Volver al inicio</Button>
    </Wrapper>
  );
};

export default error;
