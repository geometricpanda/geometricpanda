import { addParameters } from '@storybook/react';
import { BADGE, defaultBadgesConfig } from '@geometricpanda/storybook-addon-badges';

addParameters({
  badgesConfig: {
    [BADGE.BETA]: {
      ...defaultBadgesConfig[BADGE.BETA],
      tooltip: {
        title: 'This is Beta',
        desc: 'Be ready to receive updates frequently and leave a feedback',
        links: [
          {title: 'Read more', href: 'http://path/to/your/docs'},
          {title: 'Leave feedback', onClick: () => {alert('thanks for the feedback')}}]
      }
    },
    [BADGE.DEPRECATED]: {
      ...defaultBadgesConfig[BADGE.DEPRECATED],
      tooltip: 'This component is deprecated, please avoid using it.'
    }
  }
});
