import React, { FC } from 'react';
import { TBadgesConfig } from './types';
import { getColor, getContrastColor, getTitle } from './helpers';
import styled from 'styled-components'


export const BadgeWrapper = styled.span`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  user-select: none;
`;

interface BadgeProps {
  badge: string;
  config: TBadgesConfig,
}

export const BadgeInner = styled.span<BadgeProps>`
  border: 1px solid ${({ badge, config }) => getColor(badge, config)};
  color: ${({ badge, config }) => getColor(badge, config)};
  background-color: ${({ badge, config }) => getContrastColor(badge, config)};
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 0.75rem;
`;

export const Badge: FC<BadgeProps> = ({ badge, config }) => (
  <BadgeWrapper>
    <BadgeInner badge={badge} config={config}>
      {getTitle(badge, config)}
    </BadgeInner>
  </BadgeWrapper>
);

