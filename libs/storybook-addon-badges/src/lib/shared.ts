import type { BadgeConfig } from './types';

export const ADDON_ID = '@geometricpanda/storybook-addon-badges';
export const ADDON_TITLE = 'Storybook Addon Badges';

export const PARAM_BADGES_CONFIG_KEY = 'badgesConfig';
export const PARAM_BADGES_KEY = 'badges';

export const defaultBadgeConfig: BadgeConfig = {
  title: 'Badge',
  color: '#000',
  contrast: '#FFF',
}
