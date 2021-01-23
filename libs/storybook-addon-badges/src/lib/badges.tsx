import React, { FC, useEffect, useState } from 'react';
import { Separator, Spaced } from '@storybook/components';

import { TBadgesConfig } from './types';
import { Badge } from './badge';

export const Badges: FC<{ parameters: any }> = ({ parameters }) => {
  const [badges, setBadges] = useState<string[]>([]);
  const [badgesConfig, setBadgesConfig] = useState<TBadgesConfig>({});

  useEffect(() => {
    setBadges(parameters.badges || []);
    setBadgesConfig(parameters.badgesConfig || {});
  }, [parameters.badges, parameters.badgesConfig]);

  return (
    <>
      <Separator />
      {badges.map((badge, index) =>
        <Spaced row={1} col={index} key={index}>
          <Badge badge={badge} config={badgesConfig} />
        </Spaced>
      )}
      <Separator />
    </>
  );
};
