import React, { FC } from 'react';
import { Separator, Spaced } from '@storybook/components';
import { styled } from '@storybook/theming';

import type { BadgeConfig, BadgesConfig } from '../types';

import { defaultBadgesConfig } from '../shared';
import { Badge } from './badge';
import { getBadgeCustomProperty } from '../helpers/helpers';

interface BadgesProps {
  badges: Array<string>;
  badgesConfig?: BadgesConfig;
}

const getCustomProperties = (config: BadgesConfig) =>
  Object.entries(config).reduce(
    (acc, [name, { color, contrast, styles }]) => ({
      ...acc,
      [getBadgeCustomProperty(name, 'background-color')]:
        styles?.backgroundColor || contrast || '#EDEFF5',
      [getBadgeCustomProperty(name, 'border-color')]:
        styles?.borderColor || color || '#474D66',
      [getBadgeCustomProperty(name, 'color')]:
        styles?.color || color || '#474D66',
      [getBadgeCustomProperty(name, 'border-width')]:
        styles?.borderWidth || '1px',
      [getBadgeCustomProperty(name, 'border-style')]:
        styles?.borderStyle || 'solid',
      [getBadgeCustomProperty(name, 'border-radius')]:
        styles?.borderRadius || '3px',
      [getBadgeCustomProperty(name, 'font-family')]:
        styles?.fontFamily || 'inherit',
      [getBadgeCustomProperty(name, 'font-size')]:
        styles?.fontSize || '0.625rem',
      [getBadgeCustomProperty(name, 'font-weight')]:
        styles?.fontWeight || 'bold',
      [getBadgeCustomProperty(name, 'line-height')]: styles?.lineHeight || '1',
      [getBadgeCustomProperty(name, 'padding-block')]:
        styles?.paddingBlock || '2px',
      [getBadgeCustomProperty(name, 'padding-inline')]:
        styles?.paddingInline || '5px',
      [getBadgeCustomProperty(name, 'text-transform')]:
        styles?.textTransform || 'uppercase',
    }),
    {}
  );

interface BadgesWrapperProps {
  badgesConfig: BadgesConfig;
}

const BadgesWrapper = styled.div<BadgesWrapperProps>(
  ({ theme, badgesConfig }) => ({
    ...getCustomProperties(badgesConfig),
    marginInline: theme.layoutMargin / -2,
    paddingLeft: theme.layoutMargin,
    display: 'flex',
    alignItems: 'center',
  })
);

export const Badges: FC<BadgesProps> = ({
  badges = [],
  badgesConfig = defaultBadgesConfig,
}) => (
  <>
    <Separator />
    <BadgesWrapper badgesConfig={badgesConfig}>
      {badges.map((badge, index) => (
        <Badge key={badge} badge={badge} config={badgesConfig[badge]} />
      ))}
    </BadgesWrapper>
    <Separator />
  </>
);
