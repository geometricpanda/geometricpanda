import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, ADDON_TITLE } from './constants';
import { Container } from './container';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: ADDON_TITLE,
    type: types.TOOL,
    match: () => true,
    render: () => <Container />
  });
});
