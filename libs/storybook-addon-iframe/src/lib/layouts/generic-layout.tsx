import React, { ReactNode } from 'react';
import styled from 'styled-components';

const GenericIconLayoutWrapper = styled.div`
  width: 200px;
  margin-bottom: 1rem;
`;

const GenericLayoutText = styled.h1`
  color: #999;
  font-size: 1rem;
  font-weight: bold;
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
  icon?: ReactNode;
}

export const GenericLayout: React.FC<GenericLayoutProps> = ({ children, icon }) => (
  <GenericLayoutContainer>
    {icon && (
      <GenericIconLayoutWrapper>
        {icon}
      </GenericIconLayoutWrapper>
    )}
    <GenericLayoutText>
      {children}
    </GenericLayoutText>
  </GenericLayoutContainer>
);
