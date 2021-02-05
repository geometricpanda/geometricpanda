import addons, { types } from '@storybook/addons';
import React from 'react';
import { ADDON_ID, PANEL_ID, PARAM_KEY } from './shared';
import { Container } from './container';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.TAB,
    paramKey: PARAM_KEY,
    title: 'Info',
    match: () => true,
    route: ({ storyId, refId }) => (refId ? `/iframe/${refId}_${storyId}` : `/iframe/${storyId}`),
    render: () => <Container />
  });
});
