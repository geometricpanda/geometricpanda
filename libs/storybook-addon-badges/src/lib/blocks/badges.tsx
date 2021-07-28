import React, { FC } from 'react';
import { Separator, Spaced } from '@storybook/components';

import type { BadgesConfig } from '../types';

import { defaultBadgesConfig } from '../shared';
import { Badge } from './badge';

interface BadgesProps {
  badges?: string[];
  badgesConfig?: BadgesConfig;
}

export const Badges: FC<BadgesProps> = ({ badges = [], badgesConfig = defaultBadgesConfig }) => (
  <>
    <Separator />
    {badges.map((badge, index) =>
      <Spaced row={1} col={index} key={badge}>
        <Badge badge={badge} config={badgesConfig[badge]} />
      </Spaced>
    )}
    <Separator />
  </>
);
