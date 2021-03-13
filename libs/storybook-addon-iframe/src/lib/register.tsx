import addons, { types } from '@storybook/addons';
import React from 'react';
import { ADDON_ID, ADDON_TITLE, PARAM_KEY } from './shared';
import { Manager } from './manager';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    paramKey: PARAM_KEY,
    type: types.TAB,
    title: ADDON_TITLE,
    route: ({ storyId }) => `/iframe/${storyId}`,
    match: ({ viewMode }) => viewMode === 'iframe',
    render: Manager,
  });
});
