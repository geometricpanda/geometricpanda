import React, { FC } from 'react';
import { Separator, Spaced } from '@storybook/components';

import { BadgesConfig } from '../types';
import { Badge } from './badge';

interface BadgesProps {
  badges?: string[];
  badgesConfig?: BadgesConfig;
}

export const Badges: FC<BadgesProps> = ({ badges = [], badgesConfig = {} }) => (
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
