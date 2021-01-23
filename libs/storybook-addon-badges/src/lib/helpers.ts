import { TBadgeConfig, TBadgesConfig } from './types';
import { defaultBadgeConfig } from './constants';

export const getBadgeConfig =
  (badge: string, config: TBadgesConfig): TBadgeConfig => ({
    ...defaultBadgeConfig,
    title: badge,
    ...config[badge]
  });

export const getColor =
  (badge: string, config: TBadgesConfig): string =>
    getBadgeConfig(badge, config).color;

export const getContrastColor =
  (badge: string, config: TBadgesConfig): string =>
    getBadgeConfig(badge, config).contrast;

export const getTitle =
  (badge: string, config: TBadgesConfig): string =>
    getBadgeConfig(badge, config).title;
