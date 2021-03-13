import React from 'react';
import { Combo, Consumer } from '@storybook/api';
import { Badges } from './blocks/badges';
import { PARAM_BADGES_CONFIG_KEY, PARAM_BADGES_KEY } from './shared';
import { BadgesConfig } from '@geometricpanda/storybook-addon-badges';


export const Manager = () => (
  <Consumer>
    {({ api, state }: Combo) => {
      const story = api.getData(state.storyId, state.refId);

      const badgesConfig = api.getCurrentParameter<BadgesConfig[]>(PARAM_BADGES_CONFIG_KEY) || [];
      const badges = api.getCurrentParameter<string[]>(PARAM_BADGES_KEY) || [];

      return story && badges.length
        ? <Badges badges={badges}
                  badgesConfig={badgesConfig} />
        : null;
    }}
  </Consumer>
);
