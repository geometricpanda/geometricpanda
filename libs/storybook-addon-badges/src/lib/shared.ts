import type { BadgeConfig } from './types';

export const ADDON_ID = '@geometricpanda/storybook-addon-badges';
export const ADDON_TITLE = 'Storybook Addon Badges';

export const PARAM_BADGES_CONFIG_KEY = 'badgesConfig';
export const PARAM_BADGES_KEY = 'badges';

export enum BADGE {
  DEFAULT = 'default',
  BETA = 'beta',
  STABLE = 'stable',
  NEEDS_REVISION = 'needs-revision',
  OBSOLETE = 'obsolete',
  EXPERIMENTAL = 'experimental',
  DEPRECATED = 'deprecated',
}

export const defaultBadgesConfig = {
  [BADGE.DEFAULT]: {
    title: 'Badge',
    contrast: '#EDEFF5',
    color: '#474D66'
  },
  [BADGE.BETA]: {
    title: 'Beta',
    contrast: '#D6E0FF',
    color: '#2952CC'
  },
  [BADGE.STABLE]: {
    title: 'Stable',
    contrast: '#DCF2EA',
    color: '#317159'
  },
  [BADGE.NEEDS_REVISION]: {
    title: 'Needs Revision',
    contrast: '#FFEFD2',
    color: '#66460D'
  },
  [BADGE.OBSOLETE]: {
    title: 'Obsolete',
    contrast: '#F9DADA',
    color: '#7D2828'
  },
  [BADGE.EXPERIMENTAL]: {
    title: 'Experimental',
    contrast: '#E7E4F9',
    color: '#6E62B6'
  },
  [BADGE.DEPRECATED]: {
    title: 'Deprecated',
    contrast: '#F8E3DA',
    color: '#85462B'
  }
};

export const defaultBadgeConfig: BadgeConfig = defaultBadgesConfig[BADGE.DEFAULT];
