import React from 'react';
import { useStorybookApi } from '@storybook/api';
import { IframeTab } from './blocks';

export const Container = () => {
  const api = useStorybookApi();
  const story = api.getCurrentStoryData();

  return story && story.parameters
    ? <IframeTab parameters={story.parameters} />
    : null;
};
