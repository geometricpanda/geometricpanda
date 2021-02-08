import React from 'react';
import { useStorybookApi } from '@storybook/api';
import { IFrameTab } from './blocks';

export const Container = () => {
  const api = useStorybookApi();
  const story = api.getCurrentStoryData();

  return story && story.parameters
    ? <IFrameTab parameters={story.parameters} />
    : null;
};
