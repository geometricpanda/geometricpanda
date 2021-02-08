
import { BADGES } from '../src/stories/constants';

export const parameters = {
  badgesConfig: {
    [BADGES.BETA]: {
      contrast: '#FFF',
      color: '#018786',
      title: 'Beta',
    },
    [BADGES.DEPRECATED]: {
      contrast: '#FFF',
      color: '#6200EE',
      title: 'Deprecated',
    },
  }
}
