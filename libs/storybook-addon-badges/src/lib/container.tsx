import React from 'react';
import { useStorybookApi } from '@storybook/api';
import { Badges } from './badges';

export const Container = () => {
  const api = useStorybookApi();
  const story = api.getCurrentStoryData();

  return story && story.parameters
    ? <Badges parameters={story.parameters} />
    : null;
};
