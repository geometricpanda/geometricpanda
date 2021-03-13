import { BadgeConfig } from '../types';
import { defaultBadgeConfig } from '../shared';

export const getBadgeConfig =
  (badge: string, config: BadgeConfig): BadgeConfig => ({
    ...defaultBadgeConfig,
    title: badge,
    ...config,
  });

export const getColor =
  (badge: string, config: BadgeConfig): string =>
    getBadgeConfig(badge, config).color;

export const getContrastColor =
  (badge: string, config: BadgeConfig): string =>
    getBadgeConfig(badge, config).contrast;

export const getTitle =
  (badge: string, config: BadgeConfig): string =>
    getBadgeConfig(badge, config).title;
