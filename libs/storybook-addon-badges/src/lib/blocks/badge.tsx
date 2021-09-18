import React, { FC } from 'react';
import { WithBadgeTooltip } from './withBadgeTooltip';
import type { BadgeProps } from '../types';
import { getColor, getContrastColor, getTitle } from '../helpers/helpers';
import { styled } from '@storybook/theming';

export const BadgeWrapper = styled.span`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  user-select: none;
`;

export const BadgeInner = styled.span<BadgeProps>`
  border: 1px solid ${({ badge, config }) => getColor(badge, config)};
  color: ${({ badge, config }) => getColor(badge, config)};
  background-color: ${({ badge, config }) => getContrastColor(badge, config)};
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const BadgeInnerWithTooltip = WithBadgeTooltip(BadgeInner);

export const Badge: FC<BadgeProps> = ({ badge, config }) => (
  <BadgeWrapper>
    <BadgeInnerWithTooltip badge={badge} config={config}>
      {getTitle(badge, config)}
    </BadgeInnerWithTooltip>
  </BadgeWrapper>
);
