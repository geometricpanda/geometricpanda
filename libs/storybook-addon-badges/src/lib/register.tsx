import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, ADDON_TITLE } from './shared';
import { Manager } from './manager';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: ADDON_TITLE,
    type: types.TOOL,
    match: () => true,
    render: Manager
  });
});
