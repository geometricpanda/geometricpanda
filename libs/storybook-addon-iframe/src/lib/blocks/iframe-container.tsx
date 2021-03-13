import styled from 'styled-components';

export interface IFrameContainerProps {
  loaded?: boolean
}

export const IFrameContainer = styled.div<IFrameContainerProps>`
  display: flex;
  height: 100%;
  transition: transform 300ms;
  transform: ${({ loaded }) => loaded ? 'scale(1)' : 'scale(0)'};
`;
