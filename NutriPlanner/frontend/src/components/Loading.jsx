import React from 'react';
import styled from 'styled-components';
import { FadeLoader } from 'react-spinners';

const LoadingOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const override = `
  display: block;
  margin: 0 auto;
  border-color: red; 
`;

export const Loading = () => {
  return (
    <LoadingOverlay>
      <FadeLoader color={'black'} loading={true} css={override} size={150} />
    </LoadingOverlay>
  );
};

