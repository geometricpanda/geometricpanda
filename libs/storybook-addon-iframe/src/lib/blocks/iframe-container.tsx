import { styled } from '@storybook/theming'

export interface IFrameContainerProps {
  loaded?: boolean
}

export const IFrameContainer = styled.div<IFrameContainerProps>`
  display: flex;
  height: 100%;
  transition: opacity 300ms;
  transform: translate(0);
  opacity: ${({ loaded }) => loaded ? '1' : '0'};
`;
