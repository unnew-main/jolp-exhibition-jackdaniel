import styled from '@emotion/styled';
import React from 'react';

export const LayoutContainer: React.FC = ({ children }) => {
  return (
    <RootWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  z-index: 1;
  overflow: auto;
  flex-direction: column;
`;
