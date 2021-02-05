import styled from 'styled-components';

export interface IFrameContainerProps {
  loaded: boolean
}

export const IFrameContainer = styled.div<IFrameContainerProps>`
  display: flex;
  height: 100%;
  max-height: ${({ loaded }) => loaded ? '100%' : '0'};
  transition: max-height 300ms linear;
`;
