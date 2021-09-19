import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { WithBadgeTooltip } from './withBadgeTooltip';
import type { BadgeProps } from '../types';
import { getBadgeCustomProperty, getTitle } from '../helpers/helpers';

export const BadgeWrapper = styled.span(({ theme }) => ({
  display: 'flex',
  paddingInline: theme.layoutMargin / 2,
}));

export const BadgeInner = styled.span<Omit<BadgeProps, 'config'>>(
  ({ badge }) => ({
    borderColor: `var(${getBadgeCustomProperty(badge, 'border-color')})`,
    borderRadius: `var(${getBadgeCustomProperty(badge, 'border-radius')})`,
    borderStyle: `var(${getBadgeCustomProperty(badge, 'border-style')})`,
    borderWidth: `var(${getBadgeCustomProperty(badge, 'border-width')})`,
    color: `var(${getBadgeCustomProperty(badge, 'color')})`,
    backgroundColor: `var(${getBadgeCustomProperty(
      badge,
      'background-color'
    )})`,
    fontSize: `var(${getBadgeCustomProperty(badge, 'font-size')})`,
    fontFamily: `var(${getBadgeCustomProperty(badge, 'font-family')})`,
    'font-weight': `var(${getBadgeCustomProperty(badge, 'font-weight')})`,
    lineHeight: `var(${getBadgeCustomProperty(badge, 'line-height')})`,
    'text-transform': `var(${getBadgeCustomProperty(badge, 'text-transform')})`,
    paddingInline: `var(${getBadgeCustomProperty(badge, 'padding-inline')})`,
    paddingBlock: `var(${getBadgeCustomProperty(badge, 'padding-block')})`,
    display: 'block',
  })
);

const BadgeInnerWithTooltip = WithBadgeTooltip(BadgeInner);

export const Badge: FC<BadgeProps> = ({ badge, config }) => (
  <BadgeWrapper>
    <BadgeInnerWithTooltip badge={badge} config={config}>
      {getTitle(badge, config)}
    </BadgeInnerWithTooltip>
  </BadgeWrapper>
);
