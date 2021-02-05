import React, { ReactNode } from 'react';
import styled from 'styled-components';

const GenericIconLayoutWrapper = styled.div`
  width: 200px;
`;

const GenericLayoutText = styled.h1`
  color: #999;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const GenericLayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export interface GenericLayoutProps {
  icon: ReactNode;
}

export const GenericLayout: React.FC<GenericLayoutProps> = ({ children, icon }) => {
  return (
    <GenericLayoutContainer>
      <GenericIconLayoutWrapper>
        {icon}
      </GenericIconLayoutWrapper>
      <GenericLayoutText>
        {children}
      </GenericLayoutText>
    </GenericLayoutContainer>
  );
};
